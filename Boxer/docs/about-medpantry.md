---
sidebar_position: 2
---

# About MedPantry

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

## How we want to change the sequence of events

Instead of having first and second sort boxes, we will have only one container where incoming items are placed. *Boxer* will be designed to track the exact quantity of items in these containers and will update the Shopify stock accordingly.

Volunteers can scan items when they come in using *Eagle*'s technology, which will tell them exactly what item they have and what container it belongs in.

## Existing problems and our solutions

#### Problem: Shopify is not being used properly

Shopify's "SKU" field should not be used to store the location of items in the physical warehouse.

Causes a lack of scalability as one item type cannot be stored in multiple Baxter Boxes.

Instead, the SKU should be in immutable unique ID for each different item.

#### Solution

Give each different item its own SKU and store that SKU on Shopify.

Boxer will store the location of all items and will know their corresponding SKUs.

---

#### Problem: too much reliance on the manager

The manager must manually identify free Baxter Boxes.

The manager must constantly review what volunteers have packed and manually update the information on Shopify.

The manager needs to tell volunteers what orders have come in and where to find the items.

#### Solution

Boxer keeps track of what items are being stored in which containers. Thus, it will automatically tell volunteers where to put items.

When volunteers store items into containers, they can update the information on Boxer themselves. The storage updates are displayed on a log, which the manager can review. Boxer then updates the Shopify stock accordingly.

Shopify orders that have come in are automatically displayed on Boxer, and volunteers are able to see exactly where to find the relevant items.

---

#### Problem: it is hard for volunteers to identify items that have been donated

Many items are highly similar and are slight variants of each other. It's difficult and time-consuming to manually identify items.

#### Solution

Volunteers will be able to use *Eagle*'s technology to scan item packaging to identify exactly which item they are stocking.

## Summary of Boxer

A 'virtual warehouse' system which identifies and manages the physical location of items.