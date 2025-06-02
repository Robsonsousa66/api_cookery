import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação Culinária')
    .setDescription('Documentação dos endpoint públicos')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Material')
    .addTag('Revenue')
    .build();

  const documentStopLight = SwaggerModule.createDocument(app, config);

  app.use('/api-json', (req: express.Request, res: express.Response) => {
    res.json(documentStopLight);
  });

  app.use('/docs', (req: express.Request, res: express.Response) => {
    res.sendFile(join(__dirname, '..', 'public', 'rapi-doc.html'));
  });

  SwaggerModule.setup('api/docs', app, documentStopLight, {
    swaggerOptions: {
      persistAuthorization: true,
      // Personalizar o layout padrão
      docExpansion: 'none', // Opções: 'none', 'list', 'full'
      filter: '', // Permite buscar tags
      tagsSorter: 'none', // Ordena as tags alfabeticamente
      operationsSorter: 'alpha', // Ordena operações (endpoints) alfabeticamente
      defaultFilter: '',
    },
    customCss: `
      body { background-color: #f7f7f7; }
      .swagger-ui .topbar { display: none }
      .swagger-ui .info { background-color: #f7f7f7 }
      .swagger-ui .scheme-container {background: #f7f7f7}
  }
    `, // Adicione CSS personalizado aqui
    customSiteTitle: 'API SmartNew',
    customfavIcon:
      'https://sistemas.smartnewsystem.com.br/_lib/libraries/grp/metronic/favicon.ico',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
