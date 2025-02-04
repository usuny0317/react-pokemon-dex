const Dashboard = () => {
  const getMy = () => {
    const result = [];
    for (let i = 1; i <= 6; i++) {
      result.push(<button>{i}</button>);
    }
    return result;
  };

  return (
    <div>
      <h1>나만의 포켓몬</h1>
      <div>{getMy()}</div>
    </div>
  );
};

export default Dashboard;
