Styled System Theme Specification# Chakra-ui

Probando chakra-ui con React y Typescript.

## Getting started

Se puede empazar siguiendo la guia en la [documentacion](https://chakra-ui.com/getting-started/).

## Componentes

Los componentes los podemos ver [aqui](https://chakra-ui.com/docs/components)

- Aspect Ratio component : usa un iframe para embeber, imagenes, videos, o visualizar mapas.
- Box component: Es el componente base sobre el que esta constuido todo en chakra-ui, se renderiza 
  sobre un div.
- Flex component: es un Box componente pero con la propiedad CSS `display: flex`
- Stack component: Es un layout component y facilita stack components juntos y aplicar espacio entre ellos, ya sea verticual(VStack) u horizontal(HStack).
- Text component: es usado para renderizar texto y parrafor en una interfaz, por defecto rederiza `<p>` tag.
- Heading component: Renderiza headlines. Puedo darle las propiedades "as='h1'" y "fontSize", etc.

- **Style Props**: es una forma para alterar estilos de un componente, pasando las propiedades. Ejm. margin `m={2}` maxWidt con `maxW="960px"`. Nos permite editar estilos sin tener que tocar el css directamente.
Estas props las podemos encontrar en [Style Props](https://chakra-ui.com/docs/styled-system/style-props) 

- Pseudo Style Props: debemos usar el guión bajo antes de la prop para aplicarlos ejm: `_hover`, el valor que se pone dentro de esta prop es un objeto. Estas props ayudaran a permitir hacer cambios mas detallados al css desde estas props.

## UI design with figma
Hay un kit de diseño de Ui para figma [aqui](https://chakra-ui.com/figma/ui-kit).

## Ejemplos:
Vamos a replicar el [siguiente diseño](https://www.figma.com/file/2UvLO274B9TNdsChCIC0hi/Pricing-UI?node-id=0%3A1) que esta en figma, usando chakra Ui.

1. Construyendo header Section.
2. Construyendo Pricing Section (parte izquierda).
3. Constuyendo Princing Section (parte derecha).: Tengo que copiar los svg de los inconos de check en de figma.
4. Constuyendo la Feature Section o seccion de caracteristicas.: Se copia los SVG en el archivos `Icons.tsx`
  - Aqui creamos 2 componentes:
    1. Iconos.
    2. Feature: continene el icono y texto.
    3. Features: continene el componente Feature

## Entendiento el Desault theme de chakra-ui
El objeto `theme`es donde se define la paleta de colores de mi aplicacion, como el tipo de escala, el grupo de fuentes, brakpoints, volores del vorder radius y muchas otras cosas mas. Esta basado en [Styled System Theme Specification](Styled System Theme Specification)

- Colors
- Fonts
- Breakpoints
- Spacing

## Refactoring UI with Theme Tokens
- Header componente:
  - Heading `fontWeight` replace _800_ value to _extrabold_.
  - replace `fontSize` _48px_ value to _5xl_.
  - replace del componente `Text`la propiedad `fontWeig` el valor _500_ por _medium_.
  - reemplaza _24px_ por _2xl_ en la propiedad `fontSize`del componente `Text`
  - reemplaza _112px_ por _28_ la propiedad `pb` del componente `Box`
  - reemplaza _#F7FAFC_ por _gray.50_ la propiedad `color` del componente `Box`

El hacer uso de los theme tokens nos agrega consistencia a la hora de crear y actualizar nuestra ui.

## Responsive Styles

Chakra-ui soport estilos responsive fuera de la caja, es decir sin añadir `@media` queries y añadir
estilos anidados a el codigo, chalra permite proveer un objeto y de valores de un array de estilos 
mobile-firts para mis estilos responsive. `<Box w={[300, 400, 500]}>`

Usamos `@media(min-width)` para asegurarnos que nuestra interfaz es mobile-first. Aqui podemos usar 
los breakpoints de los theme tokens de chakra-ui.

## Constuyendo una UI responsive

- Refactorizar Header component para que sea responsive.
- Refactoizar Princing component para que sea responsive