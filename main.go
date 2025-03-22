package main

import (
	"GO_Share/dao"
	"GO_Share/models"
	"GO_Share/routers"
	"fmt"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	//连接数据库
	err := dao.InitMySQL()
	if err != nil {
		panic(err)
	}
	defer dao.DB.Close()
	//模型绑定
	dao.DB.AutoMigrate(&models.File{}, &models.Apply{}, &models.Applyrecord{})
	ip := models.GetHostIp()
	fmt.Println(ip)
	models.Node = fmt.Sprintf("%v", models.Ip2Node[ip])
	fmt.Println("本机节点为:", models.Node)
	r := routers.SetupRouter()
	r.Run()
}
