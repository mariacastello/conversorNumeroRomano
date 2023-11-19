## Conversor de Números Romanos e Reais

- **Estrutura HTML:**
  - Criada uma estrutura básica contendo inputs para inserir números romanos ou reais e botões para acionar as conversões.
- **JavaScript:**
  - Definidas classes para realizar as conversões:
    - `ConversorRomano` para converter números romanos para reais.
    - `ConversorReal` para converter números reais para romanos.
  - Criada uma classe `Conversor` para implementar métodos estáticos que chamam as funções de conversão das classes específicas.
  - Métodos de conversão implementados dentro das respectivas classes:
    - `paraReal` em `ConversorRomano` para converter romano para real.
    - `paraRomano` em `ConversorReal` para converter reais para romano.
- **Interação com a Interface:**
  - Funções fora das classes para lidar com a interação da interface:
    - `converterParaReal` para receber um número romano e exibir o equivalente real.
    - `converterParaRomano` para receber um número real e exibir o equivalente romano.
