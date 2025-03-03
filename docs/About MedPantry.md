---
sidebar_position: 2
---

## Sequence of events at MedPantry before the implementation of Boxer

#### Donations coming in

1. Medical supplies are donated to the MedPantry warehouse.
2. Volunteers manually identify individual products and put them into their respective "pidgeon holes", also known as "first-sort boxes".
3. When enough items accumulate in the first-sort boxes, volunteers manually count items and group them into "packs of [number]".
4. The manager must manually identify a free "Baxter Box". This is where the items will be stored.
5. These grouped items are then stored into Baxter Boxes. Each Baxter Box has its own box number, ranging currently from 1 to 800. This box number is used to locate where the items are stored.
6. The manager on duty updates the stock count on Shopify, and changes the "SKU" field to reflect which box number the item is being stored in.
7. The stored items are ready to be ordered from Shopify.

#### Shopify orders coming in

1. The manager on duty identifies what orders have come in from Shopify.
2. The manager checks where that item is stored by checking the "SKU" field.
3. The manager relays this information to the volunteer, who retrieves the item(s).

## Existing problems and our solutions

#### Problem: Shopify is not being used properly

Shopify's "SKU" field should not be used to store the location of items in the physical warehouse.

Causes a lack of scalability as one item type cannot be stored in multiple Baxter Boxes.

Instead, the SKU should be in immutable unique ID for each different item.

#### Solution

Give each different item its own SKU and store that SKU on Shopify.

Boxer will store the location of all items and will know their corresponding SKUs.

---

#### Problem: too much manual work and reliance on the manager

