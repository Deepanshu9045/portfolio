import { posts } from '../data/portfolioData'

export function WritingSection() {
  return (
    <div className="section-stack">
      <section className="panel">
        <div className="section-heading">
          <p className="eyebrow">Writing</p>
          <h2>Ideas, learning, and design notes</h2>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <article key={post.title} className="post-card">
              <img src={post.image} alt={post.title} />
              <div className="post-copy">
                <div className="post-meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
