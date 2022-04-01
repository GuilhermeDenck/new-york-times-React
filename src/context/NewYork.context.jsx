import { createContext, useState } from "react";
import api from "../service/api";

export const NewYorkContext = createContext();

const NewYorkProvider = ({children}) => {

  const [home, setHome] = useState([])
  const [world, setWorld] = useState([]);
  const [food, setFood] = useState([]);
  const [business, setBusiness] = useState([]);
  const [tech, setTech] = useState([]);

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
    return news;
  }

  const getNewsHome = async () => {
    try {
      const {data} = await api.get('/home.json?api-key=jW6a1bsrsqzbYBm8WhnM72WRvvVks4OM');
      setHome(formatNews(data));
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsWorld = async () => {
    try {
      const {data} = await api.get('/world.json?api-key=jW6a1bsrsqzbYBm8WhnM72WRvvVks4OM');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsFood = async () => {
    try {
      const {data} = await api.get('/food.json?api-key=jW6a1bsrsqzbYBm8WhnM72WRvvVks4OM');
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const getNewsBusiness = async () => {
    try {
      const {data} = await api.get('/business.json?api-key=jW6a1bsrsqzbYBm8WhnM72WRvvVks4OM');
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  const getNewsTech = async () => {
    try {
      const {data} = await api.get('/technology.json?api-key=jW6a1bsrsqzbYBm8WhnM72WRvvVks4OM');
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NewYorkContext.Provider value={{ getNewsHome, home }}>
      {children}
    </NewYorkContext.Provider>
  );
}

export default NewYorkProvider;