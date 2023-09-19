'use strict';
 
const express = require('express');
 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// App
const app = express();

app.use(express.json());

app.post('/mapper', (req, res) => {
  /*public class OAuth2User {
    private String tenantName;
    private TenantId tenantId;
    private String customerName;
    private CustomerId customerId;
    private String email;
    private String firstName;
    private String lastName;
    private boolean alwaysFullScreen;
    private String defaultDashboardName;
    
    // NOTE: Next configurations available only in Professional Edition
    private List<String> userGroups;
    private String parentCustomerName;
    private CustomerId parentCustomerId;
}*/
  const email = req.body.emails && req.body.emails.length > 0 ? req.body.emails[0].value : null;

  return {
    email: email,
    tenantName: email,
    firstName: req.body.given_name,
    lastName: req.body.family_name,
    userGroups: [
      "Tenant Administrators"
    ]
  }
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});