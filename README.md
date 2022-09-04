# Reactjs Link Shortener

![image](https://user-images.githubusercontent.com/90038064/188309209-3db8e027-b0da-4ac0-82d1-03348e8a71c9.png)

# Getting Started

```
git clone https://github.com/bugaichuk01/Reactjs-Link-Shortener
npm install
npm start
```

# Creating a docker image

```
docker build -t reactjs-link-shortener .
docker run --name shortener -d -p 3000:3000 reactjs-link-shortener:latest 
```
