package main

import (
	"log"

	"github.com/desksoul29/social-unipamplona/bd"
	"github.com/desksoul29/social-unipamplona/handlers"
)

func main() {
	if bd.ChequeoConnection() == 0 {
		log.Fatal("Sin conexión a la BD")
		return
	}
	handlers.Manejadores()
}
