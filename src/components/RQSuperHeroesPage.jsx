import { useState } from "react";
import { useAddSuperHeroData, useQuerydata } from "../hooks/useQueryData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const [title, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log({ error });
  };

  const { isLoading, data, isError, error, refetch } = useQuerydata(
    onSuccess,
    onError
  );

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ title, alterEgo });
    const hero = { title, alterEgo };
    addHero(hero);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data?.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.title}</Link>
          </div>
        );
      })}
      {/* {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>
      })} */}
    </>
  );
};
