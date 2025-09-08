import '../CSS/Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div>
                <p className='mensagemCentral'>Venha praticar com quem sabe</p>
                <p className='mensagemSegundaria'>Alimente o que te move todo dia, a sua vontade de aprender e adquirir conhecimento... e torne-se um especialista com o NextCode. Nossos cursos e exercícios foram criados para capacitar você com as ferramentas e a experiência necessárias para codificar com excelência e se destacar no mercado. <strong className='strongTextoSegundario'>O futuro espera por quem se prepara. </strong> </p>

                <section className='dadosJuntos'>

                    <div className='dadosSeparados'>
                    <p className='dadosBanner'>40</p>
                    <p>Cursos Completos</p>
                    </div>

                    <div className='dadosSeparados'>
                    <p className='dadosBanner'>50</p>
                    <p>Projetos Práticos</p>
                    </div>

                    <div className='dadosSeparados'>
                    <p className='dadosBanner'>60</p>
                    <p>Horas de Aulas</p>
                    </div>

                </section>
            </div>

            <div className='imagemBanner'>
                <p>uma imagem aqui</p>
            </div>
            

        </div>

    )
}

export default Banner