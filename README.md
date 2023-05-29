# Chakra-ui

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