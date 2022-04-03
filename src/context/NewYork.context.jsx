import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../service/api";

export const NewYorkContext = createContext();

const NewYorkProvider = ({children}) => {

  const TOKEN = 'jW6a1bsrsqzbYBm8WhnM72WRvvVks4OM';

  const [home, setHome] = useState([]);
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState({});

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const formatNews = (news) => {
    const newsFormated = news.results.map( e => {
      return {
        section: e.section,
        title: e.title,
        abstract: e.abstract,
        url: e.url,
        uri: e.uri,
        multimedia: e.multimedia,
        published_date: e.published_date,
        uri: e.uri,
        byline: e.byline
      }
    });
    return newsFormated;
  }

  const getNewsHome = async () => {
    try {
      const {data} = await api.get(`/home.json?api-key=${TOKEN}`);
      setHome(formatNews(data));
      setLoading(false);
      return home;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }

  const getNewsWorld = async () => {
    try {
      const {data} = await api.get(`/world.json?api-key=${TOKEN}`);
      setLoading(false);
      setNews(formatNews(data));
      return news;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }

  const getNewsTech = async () => {
    try {
      const {data} = await api.get(`/technology.json?api-key=${TOKEN}`);
      setLoading(false);
      setNews(formatNews(data));
      return news;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error)
    }
  }

  const getNewsScience = async () => {
    try {
      const {data} = await api.get(`/science.json?api-key=${TOKEN}`);
      setLoading(false);
      setNews(formatNews(data));
      return news;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error)
    }
  }

  const getNewsHealth = async () => {
    try {
      const {data} = await api.get(`/health.json?api-key=${TOKEN}`);
      setLoading(false);
      setNews(formatNews(data));
      return news;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error)
    }
  }

  const getNewsPolitics = async () => {
    try {
      const {data} = await api.get(`/politics.json?api-key=${TOKEN}`);
      setLoading(false);
      setNews(formatNews(data));
      return news;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error)
    }
  }

  return (
    <NewYorkContext.Provider value={{ 
      getNewsHome,
      getNewsWorld, 
      getNewsTech, 
      getNewsScience, 
      getNewsHealth, 
      getNewsPolitics,
      setArticle,
      article, home, news, error, loading }}>
      {children}
    </NewYorkContext.Provider>
  );
}

export default NewYorkProvider;