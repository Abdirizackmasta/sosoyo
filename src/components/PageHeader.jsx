import '../css/page_header.css';
export default function PageHeader({ title }) {

    return (
        <div className="page-header" >
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h2>{title}</h2>
                        <p className='about-details'>At SOSOYO Foundation, we are committed to creating positive change and uplifting communities across the nation. Our relentless dedication drives us to provide vital support and opportunities to those in need, empowering them to realize their full potential.</p>
                    </div>
                    <div className="col-12">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}