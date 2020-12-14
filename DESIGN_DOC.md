## CUNA Auto Loan Application

### User Flow - 

1. User is brought to landing page and prompted to enter their information.
2. Upon successfully entering valid information the user clicks "Submit Application"
3. If the user does not qualify (by way of inputting an auto purchase price that is more than 1/5 of their estimated income) they are routed to "/disqualified". Where they recieve a disqualification message and contact information for customer service.
4. If the user tries to enter an auto purchase price above $1,000,000 the mock fetch will throw a bar request error and the user will be alerted.
5. If the user qualifies for a loan, they are routed to "/new-account" and prompted to sign up.
6. The user will enter their username, password and their password again for verification. If the entries are valid they can click "Create Account" and recieve an alert notifying them that their account has been created.

### Logic by Component - 

#### Landing Component

1. Taps into loanRequestState in order to post entire loanRequestState object to the mock api.
2. Takes in errors state from the landing store in order to dynamically display them on child inputs.
3. Takes in two redirect flags from the store in order to determine which route to redirect to after loanRequest is submitted.
4. Takes in canSubmit boolean to only enable button if the loan request form is filled out and error free.
5. Takes in loading flag from store in order to display spinner while we wait for the api to respond.
6. validate() function is fired on input change in handleChange to track errors in state.

#### Disqualification Component
1. Displays disqualification message recieved from api response that is stored in landing store.
2. Prompts user to call customer support with tel link.

#### NewAccount Component

1. Takes in user object from newAccount slice of the store so that the user's state can be submitted.
2. Takes in errors state from the newAccount store in order to dynamically display them on child inputs. 
3. Takes in canSubmit boolean to only enable button if the loan request form is filled out and error free.
4. validate() function is fired on input change in handleChange to track errors in state.
5. submit button is not functional - it does, however, alert the user that their application has been submitted.

### Other Logic - 

#### Utilities

1. Utilities contains the mockFetchCall function. This function is responsible for simulating a dummy response that is collected in a thunk in the landing store.
2. the mockFetchCall function determines the response by the value of the loanRequest that is submitted to it. The conditionals responses are designed to spec. 
3. emailValidator and passwordValidator use regex matching to return boolean values if password/username are not valid.

#### Constants

1. timeout for mockFetchCall and min/max values for credit score are stored here.

#### UI

1. Custom Button and Input components live here. 

#### Interfaces

1. All typescript interfaces present in the app live here.




