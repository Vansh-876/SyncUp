// pricing.js
import React from "react";
import './pricing.css';

function Pricing() {
    return (
        <div className="pricing">
            <div className="header">
                <div className="headingHeader">Start your 7-day free trial with SyncUp</div>
                <div className="description">
                    Power your projects, connect with peers, and maximize your potential with <b>SyncUp Pro</b>.
                </div>
            </div>
            <div className="cards_price">
                
                {/* Free Plan */}
                <div className="price1">
                    <div className="topic_head">SyncUp</div>
                    <div className="topic_description">
                        Kickstart your journey. Showcase projects, collaborate with peers, and grow your network in the SyncUp community.
                    </div>
                    <div className="topic_price">Free</div>
                    <div className="topic_features">
                        <ul>
                            <li>✅ Create and join projects.</li>
                            <li>✅ Basic file sharing (limited storage).</li>
                            <li>✅ Task assignment and tracking.</li>
                            <li>✅ Access to community forums and discussions.</li>
                            <li>✅ Join open groups and collaborate with students worldwide.</li>
                            <li>✅ View public profiles and portfolios.</li>
                            <li>✅ Access free guides, tutorials, and resources.</li>
                            <li>✅ Limited access to webinars and online events.</li>
                            <li>✅ Basic templates for planning and tracking work.</li>
                            <li>✅ Integration with Google Docs & Microsoft Office Online.</li>
                            <li>✅ Email notifications and reminders.</li>
                            <li>✅ Create your personal SyncUp profile.</li>
                            <li>✅ Showcase up to 3 projects in your portfolio.</li>
                        </ul>
                    </div>
                </div>
                
                {/* Pro Plan */}
                <div className="price2">
                    <div className="topic_head">SyncUp <div className="Pro">Premium</div></div>
                    <div className="topic_description">
                        Unlock advanced tools, elevate your projects, and get exclusive access to mentors, premium resources, and professional networking.
                    </div>
                    <div className="topic_price">₹999/month</div>
                    <div className="topic_features">
                        <ul>
                            <li className="prev">← Includes everything in Free</li>
                            <li>✅ Unlimited storage for file sharing.</li>
                            <li>✅ Advanced project management tools (Gantt, Kanban, Automations).</li>
                            <li>✅ Custom workflows for teams.</li>
                            <li>✅ Create private groups and communities.</li>
                            <li>✅ Direct messaging with mentors & industry experts.</li>
                            <li>✅ Access to all premium webinars & exclusive courses.</li>
                            <li>✅ Premium project templates and resources.</li>
                            <li>✅ Advanced tutorials & strategy guides.</li>
                            <li>✅ Integration with Slack, Trello, Notion, and more.</li>
                            <li>✅ Analytics for project views & profile growth.</li>
                            <li>✅ Unlimited portfolio projects.</li>
                            <li>✅ Highlighted profile in search results.</li>
                            <li>✅ Priority support and faster responses.</li>
                            <li>✅ Enhanced security (2FA, encryption, backups).</li>
                            <li>✅ Spotlight features in SyncUp newsletter & homepage.</li>
                            <li>✅ Exclusive invites to networking events.</li>
                            <li>✅ Priority listing in collaboration opportunities.</li>
                        </ul>
                    </div>
                    <button className="free_trial">Start Free Trial</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
