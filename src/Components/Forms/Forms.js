import React from 'react'
import styles from "./Forms.module.css"

const Forms = ({setTitle, setContent, title, content, handleSubmit, state}) => {
  return (
    <div className={styles.body}>
			<div className={styles.container}>
				<h1>Edit Task</h1>
				<form className="form">
					<input
						type="text"
						name="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						placeholder="Title"
						className={`${styles.title} ${styles.inputs}`}
					/>
					<input
						type="text"
						name="content"
						onChange={(e) => setContent(e.target.value)}
						value={content}
						placeholder="What's is the task about?"
						className={`${styles.content} ${styles.inputs}`}
					/>
					<input
						type="button"
						onClick={handleSubmit}
						name="submit"
						id={state ? state?.id : ""}
						value="submit"
						className={styles.submit}
					/>
				</form>
			</div>
		</div>
  )
}

export default Forms
