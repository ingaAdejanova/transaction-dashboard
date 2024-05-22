https://github.com/ingaAdejanova/transaction-dashboard/assets/14893038/1404db0a-9cd2-4ae9-bfbd-12f2b71eba1b

Data Management Strategy

Storing Authentication, User, and SME Information in Redux

The decision to store authentication, user, and SME information within the Redux store is driven by two key factors:

Reusability Across Components: This data could be displayed or utilized in various application components, such as user profile pages, SME profile pages, and headers. Centralizing this information in Redux ensures it can be easily accessed and reused across different parts of the application.

Infrequent Updates: Authentication, user, and SME information typically undergo infrequent updates. Storing this data in Redux is efficient, as it doesn't require constant refreshing, and helps maintain application performance.

API Calls for Transaction Data

To ensure the most up-to-date transaction information, Redux is not used for storing transaction data. Instead, fresh API calls are made each time the transaction feed is displayed. This approach guarantees that users always see the latest information, prioritizing data freshness.

New Endpoint for User Data

I have created a new endpoint, /user/me, to streamline the retrieval of user information.

Consideration for SWR

If cached data, data freshness, and real-time updates are a priority, using a library like SWR would be considered for data fetching.


