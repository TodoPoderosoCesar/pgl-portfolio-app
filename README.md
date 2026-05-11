# My Portfolio App — Refactorización

## Estructura del proyecto

```
portfolio/
├── App.tsx
├── tsconfig.json
├── types/
│   └── Tab.ts
├── data/
│   └── profile.ts
├── assets/
│   └── SofyanAmrabat.jpg       ← añadir manualmente
└── components/
    ├── HeaderNav.tsx
    ├── InfoTab.tsx
    ├── ProfileCard.tsx
    ├── InterestItem.tsx
    └── RepoTab.tsx
```

---

## Cambios realizados

### `types/Tab.ts` — nuevo fichero

Se extrae el tipo de la pestaña activa a un fichero dedicado, evitando usar `boolean` para representar navegación (poco semántico y no escalable):

```ts
// Antes (en App.tsx)
const [displayMyQR, setDisplayMyQR] = useState(true);

// Después
export type Tab = 'info' | 'repo';
const [activeTab, setActiveTab] = useState<Tab>('info');
```

---

### `data/profile.ts` — nuevo fichero

Todos los datos estaban hardcodeados directamente en el JSX. Se extraen a un fichero de datos separado, siguiendo el principio de separación entre datos y presentación:

```ts
export const PROFILE = {
  name: 'Mi nombre',
  description: '...',
  avatar: require('../assets/SofyanAmrabat.jpg'),
  repoUrl: 'https://github.com/adhernea',
};

export const INTERESTS: string[] = [
  'Salir a pasear',
  'Senderismo',
  // ...
];
```

---

### `App.tsx` — refactorizado

**Antes:** 160 líneas con todo mezclado — estado, navegación, estilos inline, datos y UI.

**Después:** fichero orquestador limpio de ~40 líneas que solo gestiona el estado de la pestaña activa y delega el renderizado a los componentes hijos.

Cambios concretos:

| Antes | Después |
|---|---|
| `displayMyQR: boolean` | `activeTab: Tab` ('info' \| 'repo') |
| Ternario con JSX extenso inline | `{activeTab === 'info' ? <InfoTab /> : <RepoTab />}` |
| `import { Button, ScrollView, ... }` (imports no utilizados) | Solo imports necesarios |
| Estilos inline mezclados con `StyleSheet` | Todo en `StyleSheet.create` |
| `backgroundColor: '#fff'` | `backgroundColor: '#f9f9f9'` (fondo suave) |

---

### `components/HeaderNav.tsx` — nuevo componente

Antes la cabecera mezclaba un `<Button>` nativo de React Native con un `<Pressable>` personalizado, resultando en una UI inconsistente. Además el `<Button>` no era estilizable.

**Ahora:** dos `<Pressable>` homogéneos con indicador visual de pestaña activa (línea inferior blanca) y props tipadas:

```tsx
type HeaderNavProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  title: string;
};
```

Nombres de estilos corregidos:

| Antes | Después |
|---|---|
| `firsttoprowContainer` | `title` |
| `rowTopSecondContainer` | `tabBar` |
| `buttonruta` | `tab` / `tabActive` |
| `shadoxboxing` | eliminado (sombra integrada en el estilo normal) |

---

### `components/ProfileCard.tsx` — nuevo componente

Se extrae del JSX inline de `App.tsx` el bloque del avatar + descripción. El `borderRadius` del avatar se corrige:

```tsx
// Antes
borderRadius: 100   // valor arbitrario

// Después
borderRadius: 45    // la mitad exacta de width/height (90) → círculo perfecto
```

---

### `components/InterestItem.tsx` — nuevo componente

Antes había 12 elementos `<Text>` repetidos manualmente en el JSX con el mismo estilo. Se reemplaza por un componente reutilizable renderizado con `FlatList`:

```tsx
// Antes: 12 líneas de JSX duplicado
<Text style={styles.cosasQmeGustanMuxoEstails}>Salir a pasear</Text>
<Text style={styles.cosasQmeGustanMuxoEstails}>Senderismo</Text>
// ...

// Después
<FlatList
  data={interests}
  keyExtractor={(item) => item}
  renderItem={({ item }) => <InterestItem label={item} />}
/>
```

Nombre de estilo corregido:

| Antes | Después |
|---|---|
| `cosasQmeGustanMuxoEstails` | `item` |

---

### `components/InfoTab.tsx` — nuevo componente

Agrupa `ProfileCard` + título de sección + `FlatList` de intereses. Recibe todo por props tipadas, sin acceder a datos globales directamente.

---

### `components/RepoTab.tsx` — nuevo componente

Antes era un `<View>` con solo el `<QRCode>` sin contexto. Ahora incluye:

- Texto descriptivo encima del QR.
- Tamaño explícito del QR (`size={200}`).
- Sombra/elevación en el QR para darle presencia visual.
- URL del repositorio visible debajo del código.

---

## Resumen de convenciones aplicadas

| Problema original | Solución aplicada |
|---|---|
| Nombres de estilos sin semántica (`bodystails`, `shadoxboxing`) | camelCase descriptivo (`body`, `tabBar`, `qrWrapper`) |
| Estilos inline mezclados con `StyleSheet` | Todo centralizado en `StyleSheet.create` |
| Un único fichero de 160 líneas | 7 ficheros con responsabilidad única |
| Datos hardcodeados en JSX | Extraídos a `data/profile.ts` |
| `boolean` para representar navegación | Tipo `Tab = 'info' | 'repo'` |
| `ScrollView` + `Text` repetidos | `FlatList` + componente `InterestItem` |
| `Button` nativo no estilizable mezclado con `Pressable` | Tabs homogéneos con `Pressable` |
| Sin `tsconfig.json` | Añadido con `"jsx": "react-native"` |
