
const subscriptions = [
    {
        subscriptionId: "SUB_001",
        customerName: "Nguyen Van An",
        planTier: "PERSONAL",
        deviceLimit: 2
    },
    {
        subscriptionId: "SUB_002",
        customerName: "Tran Thi Mai",
        planTier: "FAMILY",
        deviceLimit: 5
    }
];

// Chuc nang 1: Them thue bao
function addSubscription() {
    const customerName = prompt("Nhap ten khach hang:");

    if (customerName === null || customerName.trim() === "") {
        console.log("Ten khach hang khong hop le!");
        return;
    }

    const planChoice = prompt("Chon goi:\n1. PERSONAL\n2. FAMILY");

    if (planChoice === "1") {
        subscriptions.push({
            subscriptionId: "SUB_" + String(Date.now()).slice(-6),
            customerName: customerName.trim(),
            planTier: "PERSONAL",
            deviceLimit: 2
        });
    } else if (planChoice === "2") {
        subscriptions.push({
            subscriptionId: "SUB_" + String(Date.now()).slice(-6),
            customerName: customerName.trim(),
            planTier: "FAMILY",
            deviceLimit: 5
        });
    } else {
        console.log("Goi cuoc khong hop le!");
        return;
    }

    console.log("Them thue bao thanh cong!");
}

// Chuc nang 2: Hien thi danh sach
function listSubscriptions() {
    console.table(subscriptions);
}

// Chuc nang 3: Cap nhat goi cuoc
function updateSubscription() {
    const subscriptionId = prompt("Nhap ma thue bao can cap nhat:");

    if (subscriptionId === null) {
        return;
    }

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId.trim()) {
            const planChoice = prompt("1. PERSONAL\n2. FAMILY");

            if (planChoice === "1") {
                subscriptions[i].planTier = "PERSONAL";
                subscriptions[i].deviceLimit = 2;
            } else if (planChoice === "2") {
                subscriptions[i].planTier = "FAMILY";
                subscriptions[i].deviceLimit = 5;
            } else {
                console.log("Goi cuoc khong hop le!");
                return;
            }

            console.log("Cap nhat thanh cong!");
            return;
        }
    }

    console.log("Khong tim thay thue bao!");
}

// Chuc nang 4: Xoa thue bao
function deleteSubscription() {
    const subscriptionId = prompt("Nhap ma thue bao can xoa:");

    if (subscriptionId === null) {
        return;
    }

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId.trim()) {
            subscriptions.splice(i, 1);
            console.log("Xoa thue bao thanh cong!");
            return;
        }
    }

    console.log("Khong tim thay thue bao!");
}

// Menu dieu khien
let menuChoice;

do {
    menuChoice = prompt(
        "RIKKEISTREAM - QUAN LY THUE BAO\n\n" +
        "1. Them thue bao\n" +
        "2. Xem danh sach\n" +
        "3. Cap nhat goi cuoc\n" +
        "4. Xoa thue bao\n" +
        "5. Thoat\n\n" +
        "Nhap lua chon:"
    );

    switch (menuChoice) {
        case "1":
            addSubscription();
            break;

        case "2":
            listSubscriptions();
            break;

        case "3":
            updateSubscription();
            break;

        case "4":
            deleteSubscription();
            break;

        case "5":
            console.log("Da thoat chuong trinh!");
            break;

        case null:
            menuChoice = "5";
            console.log("Da thoat chuong trinh!");
            break;

        default:
            console.log("Lua chon khong hop le!");
            break;
    }
} while (menuChoice !== "5");
