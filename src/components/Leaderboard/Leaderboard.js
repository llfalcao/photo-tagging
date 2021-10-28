import { useEffect, useState } from 'react';
import * as S from './styles';

const Leaderboard = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    let rankingData = localStorage.getItem('ranking');
    if (rankingData !== null) {
      rankingData = JSON.parse(rankingData);
      setRankings(rankingData);
    }
  }, []);

  return (
    <S.Table>
      <thead>
        <S.TableRow>
          <S.TableHeader>Name</S.TableHeader>
          <S.TableHeader>Time</S.TableHeader>
          <S.TableHeader>Date</S.TableHeader>
        </S.TableRow>
      </thead>

      <tbody>
        {rankings.map((user) => (
          <S.TableRow key={user.name}>
            <S.TableData>{user.name}</S.TableData>
            <S.TableData>{user.totalTime}</S.TableData>
            <S.TableData>{user.date}</S.TableData>
          </S.TableRow>
        ))}
      </tbody>
    </S.Table>
  );
};

export default Leaderboard;
