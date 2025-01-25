package com.carlosribeiro.apirestfulv1;

import com.carlosribeiro.apirestfulv1.model.Categoria;
import com.carlosribeiro.apirestfulv1.model.Produto;
import com.carlosribeiro.apirestfulv1.model.Usuario;
import com.carlosribeiro.apirestfulv1.repository.CategoriaRepository;
import com.carlosribeiro.apirestfulv1.repository.ProdutoRepository;
import com.carlosribeiro.apirestfulv1.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class Apirestfulv1Application implements CommandLineRunner {

	private final ProdutoRepository produtoRepository;
	private final CategoriaRepository categoriaRepository;
	private final UsuarioRepository usuarioRepository;

	public Apirestfulv1Application(ProdutoRepository produtoRepository,
								   CategoriaRepository categoriaRepository,
								   UsuarioRepository usuarioRepository) {
		this.produtoRepository = produtoRepository;
		this.categoriaRepository = categoriaRepository;
		this.usuarioRepository = usuarioRepository;
	}

//	@Autowired
//	private ProdutoRepository produtoRepository;

	public static void main(String[] args) {

		SpringApplication.run(Apirestfulv1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Usuario usuario = new Usuario("senha", "senha");
		usuarioRepository.save(usuario);

		Categoria fruta = new Categoria("animais-terrestres");
		categoriaRepository.save(fruta);

		Categoria legume = new Categoria("animais-aereos");
		categoriaRepository.save(legume);

		Categoria verdura = new Categoria("animais-marinhos");
		categoriaRepository.save(verdura);

		//TERRESTRES
		Produto produto = new Produto(
				"cachorro.png",
				"Cachorro",
				"O melhor amigo do homem!",
				true,
				100,
				BigDecimal.valueOf(1000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"lobo.png",
				"Lobo",
				"Não tão amigo do homem assim...",
				true,
				100,
				BigDecimal.valueOf(2000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"raposa.png",
				"Raposa",
				"Mais ou menos amigo do homem?",
				true,
				100,
				BigDecimal.valueOf(3000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"gato.png",
				"Gato",
				"Melhor amiga da mulher!",
				true,
				100,
				BigDecimal.valueOf(700),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"leao.png",
				"Leão",
				"Rei da selva.",
				true,
				100,
				BigDecimal.valueOf(20000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"tigre.png",
				"Tigre",
				"Gato super saiyajins.",
				true,
				100,
				BigDecimal.valueOf(30000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"pantera.png",
				"Pantera",
				"...cor de rosa.",
				true,
				100,
				BigDecimal.valueOf(28000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"panda.png",
				"Panda",
				"É o draguão guerreiro.",
				true,
				100,
				BigDecimal.valueOf(2500),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"ursopolar.png",
				"Urso polar",
				"Adora uma Coca-Cola.",
				true,
				100,
				BigDecimal.valueOf(65000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"ursopardo.png",
				"Urso pardo",
				"Deu um Oscar pro DiCaprio.",
				true,
				100,
				BigDecimal.valueOf(32000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"ursonegro.png",
				"Urso-negro",
				"Mancinho. Bom de ter pra família.",
				true,
				100,
				BigDecimal.valueOf(10000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"lemure.png",
				"Lêmure",
				"Eu mi remexo muito!",
				true,
				100,
				BigDecimal.valueOf(6500),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"javali.png",
				"Javali",
				"Hakuna matata.",
				true,
				100,
				BigDecimal.valueOf(300),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"girafa.png",
				"Girafa",
				"Serve um bom PF.",
				true,
				100,
				BigDecimal.valueOf(18000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"chimpanze.png",
				"Chimpanzé",
				"Mais inteligente que algumas pessoas.",
				true,
				100,
				BigDecimal.valueOf(7000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"miquinho.png",
				"Miquinho",
				"Super fofo.",
				true,
				100,
				BigDecimal.valueOf(3000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"micoleaodourado.png",
				"Mico Leão Dourado",
				"Nota 20 de 10.",
				true,
				12,
				BigDecimal.valueOf(200000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"gorila.png",
				"Gorila",
				"Estrela de Hollywood. Protagonista do King Kong.",
				true,
				100,
				BigDecimal.valueOf(24000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//TERRESTRES
		produto = new Produto(
				"unicornio.png",
				"Unicórnio",
				"Pôneis malditos!",
				true,
				10,
				BigDecimal.valueOf(1000000),
				LocalDate.of(2023, 4, 26),
				fruta);
		produtoRepository.save(produto);

		//AEREOS
		produto = new Produto(
				"fenix.png",
				"Fénix",
				"Salvou o Harry Potter do Basilisco.",
				true,
				1,
				BigDecimal.valueOf(100000000),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);

		//AEREOS
		produto = new Produto(
				"dragao.png",
				"Dragão",
				"DRACARYS!!!",
				true,
				3,
				BigDecimal.valueOf(2000000000),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);

		//AEREOS
		produto = new Produto(
				"aguia.png",
				"Águia",
				"Símbolo americano.",
				true,
				100,
				BigDecimal.valueOf(2000),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);

		//AEREOS
		produto = new Produto(
				"falcao.png",
				"Falcão",
				"Mais legal que a águia.",
				true,
				100,
				BigDecimal.valueOf(1200),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);

		//AEREOS
		produto = new Produto(
				"tucano.png",
				"Tucano",
				"Tucano ou Micano?",
				true,
				100,
				BigDecimal.valueOf(50000),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);

		//AEREOS
		produto = new Produto(
				"morcego.png",
				"Morcego",
				"Minha pele é a PELE DE UM ASSASSINO, BELLA!",
				true,
				100,
				BigDecimal.valueOf(250),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);

		//AEREOS
		produto = new Produto(
				"rolinha.png",
				"Rolinha",
				"( ͡° ͜ʖ ͡°)",
				true,
				100,
				BigDecimal.valueOf(75),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"beijaflor.png",
				"Beija-flor",
				"Aviso: ele só dá selinhos, não faz de língua.",
				true,
				100,
				BigDecimal.valueOf(120),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"bemtevi.png",
				"Bem te vi",
				"Adora nos acordar de manhã.",
				true,
				100,
				BigDecimal.valueOf(250),
				LocalDate.of(2023, 4, 26),
				legume);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"tubarao.png",
				"Tubarão",
				"Olha a onda, olha a onda! Cuidado que o tubarão vai te pegar! TUDUM TUDUM TUDUM",
				true,
				100,
				BigDecimal.valueOf(1500),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"baleia.png",
				"Baleia",
				"PrOCurANDo o NEMo. OndE É que ELe estÁ?",
				true,
				100,
				BigDecimal.valueOf(95000),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"arraia.png",
				"Arraia",
				"Matou o Steve Irwin.",
				true,
				100,
				BigDecimal.valueOf(70000),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"lula.png",
				"Lula",
				"Meu companheiro.",
				true,
				100,
				BigDecimal.valueOf(400),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"tartaruga.png",
				"Tartaruga",
				"Isso foi irado, cara!",
				true,
				100,
				BigDecimal.valueOf(650),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"foca.png",
				"Foca",
				"Cachorro marinho.",
				true,
				100,
				BigDecimal.valueOf(3700),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"estreladomar.png",
				"Estrela do mar",
				"Melhor amigo da esponja do mar.",
				true,
				100,
				BigDecimal.valueOf(80),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"pocotodomar.png",
				"Cavalo-marinho",
				"O macho fica grávido ºOº",
				true,
				100,
				BigDecimal.valueOf(25),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"leviata.png",
				"Leviatã",
				"Baleia ou cobra?",
				true,
				1,
				BigDecimal.valueOf(2000500000),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);


		//MARINHOS
		produto = new Produto(
				"kraken.png",
				"Kraken",
				"RELEASE THE KRAKEN!",
				true,
				1,
				BigDecimal.valueOf(2146999999),
				LocalDate.of(2023, 4, 26),
				verdura);
		produtoRepository.save(produto);
	}
}
