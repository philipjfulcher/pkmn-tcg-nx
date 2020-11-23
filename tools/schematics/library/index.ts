import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  const libName = `${schema.type}-${schema.name}`;
  const scopeTag = `scope:${schema.scope}`;
  const typeTag = `type:${schema.type}`;

  return chain([
    externalSchematic('@nrwl/angular', 'lib', {
      name: libName,
      directory: schema.scope,
      tags: [typeTag, scopeTag].join(','),
    }),
  ]);
}
