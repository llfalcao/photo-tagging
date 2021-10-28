import { useEffect, useState } from 'react';
import * as S from './styles';

const Leaderboard = ({ hideLeaderboard }) => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    let rankingData = localStorage.getItem('ranking');
    if (rankingData !== null) {
      rankingData = JSON.parse(rankingData);
      setRankings(rankingData);
    }
  }, []);

  return (
    <S.TableContainer>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>Name</S.TableHeader>
            <S.TableHeader>Time</S.TableHeader>
            <S.TableHeader>Date</S.TableHeader>
          </S.TableRow>
        </S.TableHead>

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

      <S.BtnCloseMenu onClick={hideLeaderboard}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
        </svg>
      </S.BtnCloseMenu>
    </S.TableContainer>
  );
};

export default Leaderboard;
