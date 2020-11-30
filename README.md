<img src="https://raw.githubusercontent.com/mParticle/smartype/main/docs/logo.svg" width="280">

<img src="https://maven-badges.herokuapp.com/maven-central/com.mparticle/smartype-generator/badge.svg">


## Overview

Smartype is a powerful code generation tool that allows you to get the most out of the time you spend organizing and defining the structure of your data.

It aims to completely eliminate an entire class of data quality bugs 🐛 by generating statically-typed API clients based on the popular [JSON schema](https://json-schema.org/) standard.

🏁 Smartype is built to translate any JSON schema into type-safe models  
🏁 It gives you auto-complete for your data model in your IDE of choice  
🏁 It's open source and extensible via a plugin system   
🏁 And it's built for all and with ❤️ by [mParticle](https://www.mparticle.com)

### Example

Use this sample project to see: 
🏁 How Smartype converts any JSON schema into type-safe data collection libraries for web, iOS and Android projects
🏁 How importing these libraries into your application prevents you from collecting incorrect or incomplete data

### Get started with Smartype in a sample web project

#### In the webExample directory:
-   `npm install` development dependencies
-   Run `npm run start` to run the project locally
#### In the root directory:
-   Import the latest executable jar CLI from the [Github releases](https://github.com/mparticle/smartype/releases) 
-   Run Smrtype init to build a configuration file: `java -jar <smartype_filename.jar> init` and specify input/output directories for the data plan and generated code.
-   Run Smartype generate to translate JSON schema into statically-typed API clients: `java -jar <smartype_filename.jar> generate`

### Experiment with Smartype
Feel free to create new data objects in JSON schema to translate into code and import into your project, expand on the sample UI to see how you can collect other user event data with Smartype, or send data to any 3rd party library with [custom receivers](https://docs.mparticle.com/developers/smartype/#integrating-generated-code). 