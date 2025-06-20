<!-- Copyright (c) Meta Platforms, Inc. and affiliates.
All rights reserved.

This source code is licensed under the license found in the
LICENSE file in the root directory of this source tree.
-->

# WhatsApp Business Platform Node.js SDK (MDF Fork)
<p align="center">
<img src="./website/static/img/wa_logo-216px.svg" width="216" alt="WhatsApp Logo" />
</p>

--------------------
## Status

**⚠️ IMPORTANTE: Este es un fork personal del proyecto original**

Este paquete (`whatsapp-mdf`) es un fork personal del [WhatsApp Node.js SDK oficial](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK) que fue **archivado por Meta**.

**Proyecto Original:**
- **Estado**: ARCHIVADO (desarrollo detenido oficialmente)
- **Repositorio**: [WhatsApp/WhatsApp-Nodejs-SDK](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK)
- **Paquete npm original**: `whatsapp`

**Este Fork (`whatsapp-mdf`):**
- **Estado**: EN DESARROLLO (mantenimiento personal)
- **Repositorio**: [https://github.com/igabr13l/WhatsApp-Nodejs-SDK](https://github.com/igabr13l/WhatsApp-Nodejs-SDK)
- **Paquete npm**: `whatsapp-mdf`

Para más información sobre por qué se archivó el proyecto original, visita [este issue de GitHub](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/issues/31).

--------------------

Bienvenido al SDK para la [Plataforma de WhatsApp Business](https://business.whatsapp.com/products/business-platform/). Este SDK, escrito para el framework Node.js, simplifica el acceso a la [Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/). El código fuente está escrito en Typescript y viene con archivos de declaración de TypeScript para verificar el tipado y ofrecer autocompletado en tu IDE.

[![lint, prettify, spellcheck, test, and build](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/actions/workflows/nodejs.ci.yml/badge.svg)](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/blob/main/.github/workflows/nodejs.ci.yml)
[![generate docs](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/actions/workflows/docusaurus.yml/badge.svg)](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK/blob/main/.github/workflows/docusaurus.yml)

## Getting started
Consulta la [documentación de inicio rápido](https://whatsapp.github.io/WhatsApp-Nodejs-SDK/) para aprender a usar el SDK.

## Installation
Instala este SDK usando yarn:

```shell
yarn add whatsapp-mdf
```

O npm:

```shell
npm install whatsapp-mdf
```

## Configuración y Uso

La configuración del SDK se realiza pasando un objeto de configuración al constructor de la clase `WhatsApp`. Esto te permite inicializar y configurar el cliente de forma programática.

Aquí tienes un ejemplo de cómo instanciar el SDK:

```typescript
import WhatsApp from 'whatsapp-mdf';

const wa = new WhatsApp({
    CLOUD_API_ACCESS_TOKEN: process.env.CLOUD_API_ACCESS_TOKEN,
    WA_PHONE_NUMBER_ID: process.env.WA_PHONE_NUMBER_ID,
    WA_BUSINESS_ACCOUNT_ID: process.env.WA_BUSINESS_ACCOUNT_ID,
    // ... y otras opciones de configuración
});
```

Puedes pasar cualquiera de las siguientes claves en el objeto de configuración. Aunque el uso de variables de entorno (como `process.env`) es una práctica común, puedes pasar los valores directamente.

-   `CLOUD_API_ACCESS_TOKEN`: (Requerido) Tu token de acceso de la Cloud API.
-   `WA_PHONE_NUMBER_ID`: (Requerido) El ID de tu número de teléfono de WhatsApp.
-   `WA_BUSINESS_ACCOUNT_ID`: (Requerido) El ID de tu cuenta de empresa de WhatsApp.
-   `M4D_APP_ID`: El ID de tu aplicación de Meta for Developers.
-   `M4D_APP_SECRET`: El secreto de tu aplicación de Meta for Developers.
-   `CLOUD_API_VERSION`: La versión de la Cloud API a utilizar (p. ej. `'v16.0'`).
-   `WEBHOOK_ENDPOINT`: El endpoint para tu webhook de entrada.
-   `WEBHOOK_VERIFICATION_TOKEN`: El token para verificar las cargas útiles del webhook.
-   `LISTENER_PORT`: El puerto para el listener de la aplicación (por defecto `3000`).
-   `DEBUG`: Activa el logging de depuración (p. ej. `true`).
-   `MAX_RETRIES_AFTER_WAIT`: Número de reintentos de petición (por defecto `30`).
-   `REQUEST_TIMEOUT`: Timeout para las peticiones en milisegundos (por defecto `20000`).
-   `WA_BASE_URL`: La URL base para las peticiones del SDK (por defecto `graph.facebook.com`).

## Diferencias con el proyecto original

Este fork mantiene la funcionalidad original pero añade:

- **Mantenimiento activo**: Correcciones de bugs y actualizaciones de dependencias.
- **Compatibilidad**: Asegura el funcionamiento con versiones recientes de Node.js.
- **Mejoras de la comunidad**: Abierto a contribuciones para mejorar el SDK.
- **Configuración Programática y Centralizada**:
    - **Configuración Flexible**: El constructor de la clase `WhatsApp` ahora acepta un objeto `config` opcional. Esto te permite configurar el SDK mediante programación (p. ej. `new WhatsApp({ CLOUD_API_ACCESS_TOKEN: '...' })`) en lugar de depender únicamente de variables de entorno.
    - **Inicialización Centralizada**: La configuración proporcionada se utiliza para instanciar y centralizar todos los componentes necesarios del SDK en un solo lugar, incluyendo:
        - `Requester`: El cliente HTTP para todas las llamadas a la API.
        - `MessagesAPI`: El módulo para enviar mensajes.
        - `PhoneNumbersAPI`: El módulo para gestionar números.
        - `TwoStepVerificationAPI`: Para la verificación en dos pasos.
        - `WebhooksAPI`: Para la gestión de webhooks.

## Code of Conduct
Meta has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Contribute
See the [CONTRIBUTING](CONTRIBUTING.md) file for our development process, how to propose bugfixes and improvements, and how to build and test your changes to the WhatsApp Business Platform Node.js SDK.

## License
The WhatsApp Business Platform Node.js SDK for the Cloud API is Meta Platforms licensed, as found in the LICENSE file.

## Créditos

Este proyecto es un fork del [WhatsApp Node.js SDK oficial](https://github.com/WhatsApp/WhatsApp-Nodejs-SDK) desarrollado por Meta Platforms. Todos los derechos del código original pertenecen a Meta Platforms, Inc. y sus afiliados.
