import { createContext, useState } from "react";
import api from "../service/api";

export const NewYorkContext = createContext();

const NewYorkProvider = ({children}) => {

  const TOKEN = 'jW6a1bsrsqzbYBm8WhnM72WRvvVks4OM';

  const [home, setHome] = useState([])
  const [world, setWorld] = useState([]);
  const [tech, setTech] = useState([]);
  const [science, setScience] = useState([]);
  const [health, setHealth] = useState([]);
  const [politics, setPolitics] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const formatNews = (news) => {
    const newsFormated = news.results.map( e => {
      return {
        title: e.title,
        abstract: e.abstract,
        url: e.url,
        multimedia: e.multimedia,
        published_date: e.published_date,
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
      return data;
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
      setWorld(formatNews(data));
      return data;
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
      setTech(formatNews(data));
      return data;
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
      setScience(formatNews(data));
      return data;
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
      setHealth(formatNews(data));
      return data;
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
      setPolitics(formatNews(data));
      return data;
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error)
    }
  }

  return (
    <NewYorkContext.Provider value={{ 
      getNewsHome, home, 
      getNewsWorld, world, 
      getNewsTech, tech, 
      getNewsScience, science, 
      getNewsHealth, health, 
      getNewsPolitics, politics, 
      error, loading }}>
      {children}
    </NewYorkContext.Provider>
  );
}

export default NewYorkProvider;