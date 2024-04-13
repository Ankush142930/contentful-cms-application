import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: '2djt0f8tm8sz',
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

//Custom hook
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getDate = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
      });

      //pulling out the properties from the nested returned object from contentful
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, title, url, img };
      });

      //Setting the states
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  return { loading, projects };
};
