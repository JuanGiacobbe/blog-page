//importing components
import Author from '../../components/author/Author'


// importing styles
import './mainblog.css'


export default function MainBlog() {
	return(
		<div className='container'>
			<div className='main-blog'>

				<div className='main-img'>
					<img src='#' alt='main img' />
				</div>

				<div className='main-txt'>
					<h3 className='txt-bold'>main blog title</h3>
					<p className='separate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					 	Proin pretium, sem et lobortis euismod, ipsum odio pretium magna,
					  	ac rhoncus magna sem quis nisi</p>

					<Author />
				</div>

			</div>

		</div>
		
	)
}