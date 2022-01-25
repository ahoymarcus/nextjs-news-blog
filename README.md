# News Blog - Next.js
 

<br />

Um app Next.JS que renderiza um Blog de notícias utilizando a API pública News API (https://newsapi.org/), passando alguns parâmetros para a requição definindo número de artigos por página e a página propriamente dita que é passada de forma dinâmica na URL.:[^1]

<br />

Abaixo temos o endereço de notícias da API em que passamos 3 parâmetros, sendo o 3º o parâmetro dinâmico:

1. country
2. Size
3. pageNumber


```
https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}
```


<br />


- [my Next-JS Blog App em Vercel](https://nextjs-reactjs-news-blog.vercel.app/)


<br />

Dependências:

- React-JS
- Next-JS



<br />


### Imagem do News Blog App na página Home:

![Imagem do News Blog App na página Home](/public/images/nextjs-news-blog-01.png)


<br />


### Imagem da página de feed do News Blog App:

![Imagem da página de feed do News Blog App](/public/images/nextjs-news-blog-02.png)






<br />

<br />
<br />


[^1]: PortEXE - Youtube 
