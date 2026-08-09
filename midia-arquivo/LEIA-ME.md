# Mídia de arquivo

Arquivos que **não** são usados pelo site hoje, guardados aqui em vez de apagados.

Por que fora de `public/`: tudo que está em `public/` é publicado no deploy — ocupa espaço, sobe a cada build e fica acessível por URL direta. Não pesa no carregamento das páginas (o visitante só baixa o que a página referencia), mas também não precisa estar lá.

Para voltar a usar algum: mova de volta para `public/` e referencie no código.

| Arquivo | Observação |
|---|---|
| `video-geral-2-17seg.mp4` | 5 MB, nunca foi usado |
| `corte-2-8seg.mp4` | sobrou da galeria |
| `logo-parede.jpg` | foto da logo na parede |
| `video-geral-1-52seg-original.mp4` | original sem compressão do vídeo do hero |
| `corte-1-17seg-original.mp4` | original sem compressão do vídeo da galeria |

Os dois `-original` foram substituídos em `public/` por versões recomprimidas
no HandBrake (H.264, RF 28, sem áudio, faststart), com o **mesmo nome de
arquivo** — por isso nenhuma referência no código precisou mudar. Guardados
aqui caso um dia seja preciso recomprimir a partir da fonte, já que recomprimir
um arquivo já comprimido degrada a imagem.
