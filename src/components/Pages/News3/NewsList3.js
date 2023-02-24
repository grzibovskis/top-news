import { useState,useEffect } from 'react'
import Axios from 'axios'
import { Typography,Card, CardContent, CardMedia, Grid } from '@mui/material';

const NeswList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await Axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_KEY}`)
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={2} padding={4} >
        {
          articles.filter((item, index) => index < 10).map(article => {
              return (
                <>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card>
                      <CardMedia component='img' height='200' image={article.urlToImage} alt={article.urlToImage}></CardMedia>
                      <CardContent >
                        <Typography gutterBottom variant="h5">
                          <a href={article.url}>{article.title}</a>
                        </Typography>
                        <Typography gutterBottom variant="p">
                          {article.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              )
          })
        }
      </Grid>
    </div>
  )
}

export default NeswList