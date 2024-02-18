let objc = {
    "request_date_ms": "173466406086",
     "request_date": "2024-01-01T:01:01",
     "subscriber": {
       "last_seen": "2024-01-01T:01:01",
       "original_application_version": "1",
    "first_seen": "2024-01-01T01:01:01Z",
       "subscriptions": {
         "remotetv.yearly.06": {
           "store": "app_store",
           "purchase_date": "2024-01-01T01:01:01Z",
           "ownership_type": "PURCHASED",
           "original_purchase_date": "2024-01-01T01:01:01Z",
           "is_sandbox": false,
           "expires_date": "2099-09-09T09:09:09Z"
         },
         "remotetv.weekly.05": {
           "store": "app_store",
           "purchase_date": "2024-01-01T01:01:01Z",
           "ownership_type": "PURCHASED",
           "original_purchase_date": "2024-01-01T01:01:01Z",
           "is_sandbox": false,
           "expires_date": "2099-09-09T09:09:09Z"
         }
       },
       "other_purchases": {},
       "management_url": "https://t.me/IPAs_Dd",
       "entitlements": {
         "Premium": {
           "ownership_type": "PURCHASED",
           "product_identifier": "remotetv.yearly.07",
           "is_sandbox": false,
           "expires_date": "2099-09-09T09:09:09Z",
           "original_purchase_date": "2024-01-01T01:01:01Z",
           "purchase_date": "2024-01-01T01:01:01Z",
           "store": "app_store"
         },
         "In-apps": {
           "ownership_type": "PURCHASED",
           "product_identifier": "remotetv.onetime.01",
           "is_sandbox": false,
           "expires_date": "2099-09-09T09:09:09Z",
           "original_purchase_date": "2024-01-01T01:01:01Z",
           "purchase_date": "2024-01-01T01:01:01Z",
           "store": "app_store"
         }
       }
     }
   };
   
   $done({body: JSON.stringify(objc)});
   