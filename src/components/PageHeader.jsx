import '../css/page_header.css';
export default function PageHeader({ title, content }) {

    return (
        <div className="page-header" >
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h2>{title}</h2>
                        <p className='about-details'>{content}</p>
                    </div>
                    <div className="col-12">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}