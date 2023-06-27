export const formatDateMessage = (
    createdAt?: {
        getMinutes: () => any;
        getHours: () => any;
        getDate: () => any;
        getMonth: () => any;
        getFullYear: () => any
    }
) => {
    if (!createdAt) return "";

    return `${createdAt.getHours()}:${createdAt.getMinutes()} - ${createdAt?.getDate()}/${createdAt?.getMonth()}/${createdAt.getFullYear()}`
}