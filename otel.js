const { KoaInstrumentation } = require('@opentelemetry/instrumentation-koa')
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http')
const { SequelizeInstrumentation } = require('opentelemetry-instrumentation-sequelize')

const { registerInstrumentations } = require('@opentelemetry/instrumentation')
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node')
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base')
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc')
const { Resource } = require('@opentelemetry/resources')
const {
  SemanticResourceAttributes,
} = require('@opentelemetry/semantic-conventions')

const provider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'rocketseat-opentelemetry',
  }),
})

const exporter = new OTLPTraceExporter({
  url: '127.0.0.1:4317',
})

provider.addSpanProcessor(new SimpleSpanProcessor(exporter))

registerInstrumentations({
  instrumentations: [
    new KoaInstrumentation(),
    new HttpInstrumentation(),
    new SequelizeInstrumentation(),
  ],
  tracerProvider: provider,
})

// Initialize the OpenTelemetry APIs to use the NodeTracerProvider bindings
provider.register()
