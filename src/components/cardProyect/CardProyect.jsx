import React from 'react';
import './cardProyect.scss';

const CardProyect = (props) => {

    return (
        <div className="card section" data-toggle="modal" data-target="#basicExampleModal">
            <div className="title ">
                <p>{props.title} </p>
            </div>
            <div className="descrip">
                <p>{props.description}</p>
            </div>
            <div className="link">
                <img className="mr-2" src={`../images/ojo-${props.iconMode}.png`} width="30px" />
                <span>Echale un ojo!</span>
            </div>
            <div className="modal fade " id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content myModal">
                        <div className="text-center mt-4">
                            <h2 className="modal-title" id="exampleModalLabel">{props.title}</h2>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div>
                                        <img className="card-img" src={props.img1} width="300px"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <p id="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-8">
                                    <p id="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <img className="card-img" src={props.img1} width="300px"/>
                                    </div>
                                </div>
                              
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Tecnologias utilizadas.</h3>

                                    
                                </div>
                                
                            </div>
                           
                        </div>
                        <div className="modal-footer">
                            <div  className={`btn-profile-${props.iconMode}`} data-dismiss="modal">Close</div>
                            <div  className={`btn-profile-${props.iconMode}`}>Save changes</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CardProyect;