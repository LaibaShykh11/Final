import Cards from './Cards'

export const AllProjects = () => {
  return (
    <>
      <div className={'projects-section text-white'}>
        <div className='container'>
          <div className=' col-sm-12 col-lg-6 col-md-12 '>
            <h1>Our offerings</h1>
          </div>
          <div className='row'>
            <div
              style={{ width: '50rem' }}
              className=' col-sm-12  col-md-6 col-lg-4 '
            >
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AllProjects
