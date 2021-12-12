# NodeJS + GraphQL como servidor
Ejemplo practico de una implementacion de GraphQL con NodeJs.


## El problema con las RESTAPIs y modelos de datos estaticos.

Imaginemos que somos una Red Social (como Facebook) y necesitamos poder mostrar el perfil de un usuario en un telefono o en una pagina web. En la pagina web mostramos todo los datos del usuario ya que tenemos lugar en pantalla... Peeeeero, si estamos en un telefono no tenemos mucho espacio para mostrar todo asi que solo mostramos los datos minimos con lo cual surgen los siguientes problemas:

**- Traemos datos de mas:** Si usamos el mismo endpoint para ambos casos, en el telefono traeremos informacion de que no usaremos (ya que no vamos a poder mostrar todo en pantalla), consumiremos datos y bateria posicionando nuesta APP en los primeros puestos de consumo de estos preciados recursos (con lo cual, si no somos facebook, nos arriesgamos a que nos desinstalen).

**- Tenemos codigo duplicado:** Si hacemos dos endpoints (uno para web y otro para telefono) deberemos mantenerlos a ambos y no estamos teniendo en cuenta que podemos crecer y empezar a soportar tablets o smartTVs.

<br/>
Ohh.. y ahora... ¿quien podra ayudarnos?

<br/>

**CUIDADO!!! GrapqhQL no es mejor que REST API ni REST API es mejor que GraphQL. Ambas son herramientas muy poderosas que sirven para resolver un problema especifico en cada caso (GraphQL es un martillo, Rest Api es un destornillador).**

# Resolviendo problemas con consultas en tiempo de ejecucion (query API)

Para resolver el problema planteado en el punto anterior Facebook creo una herramienta que permite ejecutar *querys* a una API como si lo hicieramos contra una base de datos relacional (SQL)

De esta forma el problema anterior se resolveria con un solo endpoint y pidiendo solo la informacion necesaria para un telefono y utilizando el mismo endpoint pidiendo la informacion completa para la WEB.

```
// Ejemplo de una query que me traeria informacion para un telefono
// trae unos pocos campos y solo las imagenes para mobile.
{
    UserProfile(email: 'example@gmail.com') {
        name
        lastName
        mobileProfileImage
        lastPublications {
            mobileImage
            title
        }
    }
}
```

```
// Ejemplo de una query que traeria informacion para la web
// trae todos los campos y solo las imagenes para WEB
{
    UserProfile(email: 'example@gmail.com') {
        name
        lastName
        webProfileImage
        friends {
            webImage
            name
            lastName
        }
        lastPublications {
            webImage
            title
        }
        photos {
            webImage
            title
        }
    }
}
```

¿Como resolveriamos esto con una REST API sin afectar la performance ni traer informacion de mas?



# Como funciona GraphQL





# Componentes basicos

Un servidor GraphQL esta compuesto por, al menos, cuatro componentes principales y necesarios.

## Servidor
GrapqhQL por si solo no puede funcionar como un servicio web, requiere de algun componente que le se soporte HTTP (como express, restify y HTTP nativo). En nuestro caso usaremos [Express](https://www.npmjs.com/package/express) junto con el modulo [Express-GraphQL](https://www.npmjs.com/package/express-graphql).

## Schema
Un *schema* es, en una explicacion muy simple, la lista de *querys* que nuestro servidor GraphQL va a soportar. Por ejemplo, en nuestro caso, tenemos cuatro *querys*: product, products, description y modality.

Un schema esta compuesto de tres elementos:

**- Type:** Un tipo de dato a devolver (o una lista de ellos)

**- Arguments:** Parametros que se especifican en la *query*.

**- Resolvers:** La implementacion del codigo necesario para devolver el type que se le asigno.

## Types
Los *types* son, en pocas palabras, los datos que devolvera una *query*. Estos datos estan compuestos de propiedades fuertemente tipadas y perfectamente definidas.
Cada propiedad tiene un *resolver* (responsable de devolver el dato) que puede estar implicito por defecto o customizado por el desarrollador segun se necesite.

## Resolvers
Los *resolvers* son basicamente el codigo necesario para devolver el valor que se asignara a una propiedad. Un resolver puede ser implicito, es decir, que se devolvera el dato que tenga el mismo nombre que la propiedad o, puede ser personalizado para tomar un ID de los datos padres y buscar los valores a devolver desde otro origen de datos.