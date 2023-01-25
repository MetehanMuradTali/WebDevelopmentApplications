<div align="center">
  <h2>Telephone Number Validator
</h2>
</div>

Return <span style="background-color:grey">`true`</span> if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as <span style="background-color:grey">`800-692-7753`</span> or <span style="background-color:grey">`8oo-six427676;laskdjf`</span>. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is <span style="background-color:grey">`1`</span>. Return <span style="background-color:grey">`true`</span> if the string is a valid US phone number; otherwise return <span style="background-color:grey">`false`</span>.

<div align="center">
  <h2>Tests</h2>
</div>

> ``telephoneCheck("555-555-5555")`` should return a boolean.

> ``telephoneCheck("1 555-555-5555")`` should return **true**.

> ``telephoneCheck("1 (555) 555-5555")`` should return **true**.

> ``telephoneCheck("5555555555")`` should return **true**.

> ``telephoneCheck("555-555-5555")`` should return **true**.

> ``telephoneCheck("(555)555-5555")`` should return **true**.

> ``telephoneCheck("1(555)555-5555")``should return **true**.

> ``telephoneCheck("555-5555")`` should return **false**.

> ``telephoneCheck("5555555")`` should return **false**.

> ``telephoneCheck("1 555)555-5555")`` should return **false**.

> ``telephoneCheck("1 555 555 5555")`` should return **true**.

> ``telephoneCheck("1 456 789 4444")`` should return **true**.

> ``telephoneCheck("123**&!!asdf#")`` should return **false**.

> ``telephoneCheck("55555555")`` should return **false**.

> ``telephoneCheck("(6054756961)")`` should return **false**.

> ``telephoneCheck("2 (757) 622-7382")`` should return **false**.

> ``telephoneCheck("0 (757) 622-7382")`` should return **false**.

> ``telephoneCheck("-1 (757) 622-7382")`` should return **false**.

> ``telephoneCheck("2 757 622-7382")`` should return **false**.

> ``telephoneCheck("10 (757) 622-7382")`` should return **false**.

> ``telephoneCheck("27576227382")`` should return **false**.

> ``telephoneCheck("(275)76227382")`` should return **false**.

> ``telephoneCheck("2(757)6227382")`` should return **false**.

> ``telephoneCheck("2(757)622-7382")`` should return **false**.

> ``telephoneCheck("555)-555-5555")`` should return **false**.

> ``telephoneCheck("(555-555-5555")`` should return **false**.

> ``telephoneCheck("(555)5(55?)-5555")``should return **false**.

> ``telephoneCheck("55 55-55-555-5")`` should return **false**.

> ``telephoneCheck("11 555-555-5555")`` should return **false**.
