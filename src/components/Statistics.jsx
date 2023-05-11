import '../styles/statistics.css'

const Statistics = ({data}) => {
    return (
      <section class="statistics">
        <h2 class="title">Upload stats</h2>

        <ul class="stat-list">

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