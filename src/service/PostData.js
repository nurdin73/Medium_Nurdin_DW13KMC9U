export function PostData() {
    let BaseURL = 'https://localhost:5000/api/v1/login'
    return new Promise(resolve, reject) {
        fetch(BaseURL)
    }
}