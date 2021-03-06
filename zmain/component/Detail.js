function Detail(product) {
    return html`
    <div id = "detail">
    <div class = "detail-content">
        <div class="detail-nav">
            <div class="detail-nav__item  pd-left-right-174">
                <span><a href="#home">Home</a></span>
                <i class="fas fa-angle-right"></i>
                <span><a href="#shop">Shop</a></span>
                <i class="fas fa-angle-right"></i>
                <span class = "nav__item--disable"></span>
            </div>
        </div>

        <div id="detail-item" class= "detail-item mg-top-42 mg-bot-42 pd-bot-50 pd-left-right-174"></div>
        

        <div class="detail__more-infor pd-left-right-174 pd-top-50 pd-bot-50">
            <div class="detail__infor-choose-list">
                <ul class="detail__infor-list">
                    <li class="detail__infor-item detail__infor-item--active">Description</li>
                    <li class="detail__infor-item">Additional Information</li>
                    <li class="detail__infor-item">Why Buy From Us</li>
                    <li class="detail__infor-item">Delivery & Returns</li>
                </ul>
            </div>

            <div id="detail__content-infor" class="detail__content-infor">
                <div class="detail__content-pane detail__content-pane--active"> 
                    <div class="pane-heading">
                        <span class="pane-title">Description</span>
                        <div class="pane-icon">
                            <span class="pane-icon--plus-icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="pane-icon--minus-icon"><i class="fas fa-minus"></i></span>
                        </div>
                    </div>
                    <div class="pane-tab-content">
                        <p>
                            Design inspiration lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. Morbi commodo, 
                            ipsum sed pharetra gravida, orci magna rhoncus neque, 
                            id pulvinar odio lorem non turpis. Nullam sit amet enim. 
                            Suspendisse id velit vitae ligula volutpat condimentum. 
                            Aliquam erat volutpat. Sed quis velit. Nulla facilisi. 
                            Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. 
                            Sed aliquam, nunc eget euismod ullamcorper, lectus nunc 
                            ullamcorper orci.
                        </p>

                        <div class="detail__more-infor-imgBox">
                        </div>

                        <div class="detail__benefit-infor">
                            <div class="detail__benefit-list detail__benefit-list--tr">
                                <div class="detail__benefit-item">
                                    <div class="detail__benefit-img">
                                        <img src="./images/detail_icon/benefit-img_1.png" alt="">
                                    </div>
                                    <div class="detail__benefit-name">
                                        Rain & Water 
                                        <br>
                                        Resistant
                                    </div>
                                </div>

                                <div class="detail__benefit-item">
                                    <div class="detail__benefit-img">
                                        <img src="./images/detail_icon/benefit-img_2.png" alt="">
                                    </div>
                                    <div class="detail__benefit-name">
                                        UV Resistant
                                        <br>
                                        Coatings
                                    </div>
                                </div>

                                <div class="detail__benefit-item">
                                    <div class="detail__benefit-img">
                                        <img src="./images/detail_icon/benefit-img_3.png" alt="">
                                    </div>
                                    <div class="detail__benefit-name">
                                        Corrosion Resistance 
                                        <br>
                                        to Sea water
                                    </div>
                                </div>
                            </div>
                            <div class="detail__benefit-list detail__benefit-list--tl">
                                <div class="detail__benefit-item">
                                    <div class="detail__benefit-img">
                                        <img src="./images/detail_icon/benefit-img_4.png" alt="">
                                    </div>
                                    <div class="detail__benefit-name">
                                        Lead-free
                                        <br>
                                        Powdercoat Finish
                                    </div>
                                </div>

                                <div class="detail__benefit-item">
                                    <div class="detail__benefit-img">
                                        <img src="./images/detail_icon/benefit-img_5.png" alt="">
                                    </div>
                                    <div class="detail__benefit-name">
                                        Resistant to
                                        <br>
                                        Spills
                                    </div>
                                </div>

                                <div class="detail__benefit-item">
                                    <div class="detail__benefit-img">
                                        <img src="./images/detail_icon/benefit-img_6.png" alt="">
                                    </div>
                                    <div class="detail__benefit-name">                               
                                        Recyclable
                                        <br>
                                        Aluminium Frame
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="detail__content-pane"> 
                    <div class="pane-heading">
                        <span class="pane-title">Additional Information</span>
                        <div class="pane-icon">
                            <span class="pane-icon--plus-icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="pane-icon--minus-icon"><i class="fas fa-minus"></i></span>
                        </div>
                    </div>   
                    <div class="pane-tab-content">
                        <div class="detail__sp-tab-content">
                            <table class="detail__sp-tab-content-table">
                                <tbody>
                                    <tr class="detail__sp-tab-color-list">
                                        <th class="detail__sp-tab-color-header">Color</th>
                                        <td class="detail__sp-tab-color">
                                            <p>Blue, Red, Cyan, Black, Pink, Grey, Brown</p>
                                        </td>
                                    </tr>

                                    <tr class="detail__sp-tab-size-list">
                                        <th class="detail__sp-tab-size-header">Color</th>
                                        <td class="detail__sp-tab-size">
                                            <p>Blue, Red, Cyan, Black, Pink, Grey, Brown</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>

                <div class="detail__content-pane">
                    <div class="pane-heading">
                        <span class="pane-title">Why Buy From Us</span>
                        <div class="pane-icon">
                            <span class="pane-icon--plus-icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="pane-icon--minus-icon"><i class="fas fa-minus"></i></span>
                        </div>
                    </div>
                    <div class="pane-tab-content">
                        <div class="detail__sp-tab-content">
                            <strong>5 Reasons To Be Our Customer:</strong>
                            <table class="detail__sp-tab-content-table">
                                <tbody>
                                    <tr class="detail__sp-tab-reason-list">
                                        <th class="detail__sp-tab-reason-header">
                                            <img src="./images/detail_icon/reasons_1.png" alt="">
                                        </th>
                                        <td class="detail__sp-tab-reason">
                                            <p><strong>Exceptional Support</strong> Our friendly support staff are available all the time to help customers with any questions or concerns. We want our products to deliver the most joy and value with zero hassle. That???s why we insist on being available to assist when the need arises.</p>
                                        </td>
                                    </tr>
                                    <tr class="detail__sp-tab-reason-list">
                                        <th class="detail__sp-tab-reason-header">
                                            <img src="./images/detail_icon/reasons_1.png" alt="">
                                        </th>
                                        <td class="detail__sp-tab-reason">
                                            <p><strong>Exceptional Support</strong> Our friendly support staff are available all the time to help customers with any questions or concerns. We want our products to deliver the most joy and value with zero hassle. That???s why we insist on being available to assist when the need arises.</p>
                                        </td>
                                    </tr>
                                    <tr class="detail__sp-tab-reason-list">
                                        <th class="detail__sp-tab-reason-header">
                                            <img src="./images/detail_icon/reasons_1.png" alt="">
                                        </th>
                                        <td class="detail__sp-tab-reason">
                                            <p><strong>Exceptional Support</strong> Our friendly support staff are available all the time to help customers with any questions or concerns. We want our products to deliver the most joy and value with zero hassle. That???s why we insist on being available to assist when the need arises.</p>
                                        </td>
                                    </tr>
                                    <tr class="detail__sp-tab-reason-list">
                                        <th class="detail__sp-tab-reason-header">
                                            <img src="./images/detail_icon/reasons_1.png" alt="">
                                        </th>
                                        <td class="detail__sp-tab-reason">
                                            <p><strong>Exceptional Support</strong> Our friendly support staff are available all the time to help customers with any questions or concerns. We want our products to deliver the most joy and value with zero hassle. That???s why we insist on being available to assist when the need arises.</p>
                                        </td>
                                    </tr>
                                    <tr class="detail__sp-tab-reason-list">
                                        <th class="detail__sp-tab-reason-header">
                                            <img src="./images/detail_icon/reasons_1.png" alt="">
                                        </th>
                                        <td class="detail__sp-tab-reason">
                                            <p><strong>Exceptional Support</strong> Our friendly support staff are available all the time to help customers with any questions or concerns. We want our products to deliver the most joy and value with zero hassle. That???s why we insist on being available to assist when the need arises.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="detail__content-pane">
                    <div class="pane-heading">
                        <span class="pane-title">Delivery & Returns</span>
                        <div class="pane-icon">
                            <span class="pane-icon--plus-icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="pane-icon--minus-icon"><i class="fas fa-minus"></i></span>
                        </div>
                    </div>
                    <div class="pane-tab-content">
                        <div class="detail__sp-delivery-return"> 
                            <div class="detail__delivery-return pd-top-50">
                                <div class="detail__delivery-return-header pd-bot-50">
                                    <h4>Delivery</h4>
                                </div>
                                <div class="detail__delivery-return-content">
                                    <i class="fas fa-truck"></i>
                                    <div class="delivery-return__detail">
                                        <h3>FREE SHIPPING</h3>
                                        <p>Our free shipping takes between 7 & 30 days from the day of dispatch</p>
                                    </div>                        
                                </div>
                        
                                <div class="detail__delivery-return-content detail__delivery-return-content--mg">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="delivery-return__detail delivery-return__detail--mg">
                                        <h3>TRACKED ORDERS</h3>
                                        <p>After dispatch you will get a tracking code to follow your order's full journey</p>
                                    </div>                        
                                </div>
                            </div>

                            <div class="detail__delivery-return pd-top-50">
                                <div class="detail__delivery-return-header pd-bot-50">
                                    <h4>Return</h4>
                                </div>
                                <div class="detail__delivery-return-content">
                                    <i class="fas fa-undo-alt"></i>
                                    <div class="delivery-return__detail delivery-return__detail--mg_20">
                                        <h3>30 DAYS RETURN</h3>
                                        <p>You can return any unwanted item within 30 days and get a full refund</p>
                                    </div>                        
                                </div>
                        
                                <div class="detail__delivery-return-content">
                                    <i class="fas fa-barcode"></i>
                                    <div class="delivery-return__detail delivery-return__detail--mg_20">
                                        <h3>FREE RETURNS</h3>
                                        <p>Pre-paid return label will be provided if you need to return your items</p>
                                    </div>                        
                                </div>
                            </div>

                    
                        </div>  
                    </div>
                </div>
            </div>
        </div>

        <div class="recommended pd-left-right-174 pd-top-50 pd-bot-50">
            <div class="recommended-header">
                <h3>You may also like</h3>
            </div>
            <div class="recommended__contents">
                <div class="recommended__products"> 
                    <div id="recommended__products-wrapper" class="recommended__products-wrapper">
                        </div>
                    </div>
                    <div class="recommended__next-prev-btn">
                        <i class="fas fa-chevron-circle-left recommended__prev-btn"></i>
                        <i class="fas fa-chevron-circle-right recommended__next-btn"></i>
                    </div>
                </div>
            </div>
        </div>   
    </div>
    </div>
    `
}