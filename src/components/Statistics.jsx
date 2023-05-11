import '../styles/statistics.css'

const Statistics = ({data}) => {
    return (
      <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">

          {data.map((item) => (
            <li key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
  )
}

export default Statistics