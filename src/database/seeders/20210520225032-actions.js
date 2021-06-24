'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actions', [
      {
        information: "Diagnóstico nutricional, avaliação e monitoramento do estado nutricional, com base nos dados dietéticos, clínicos, bioquímicos e antropométricos (verificação do peso e da altura), de acordo com a fase do curso da vida;Identificação dos portadores de patologias e deficiências associadas à nutrição, incluindo desnutrição infantil, má-nutrição por micronutrientes e baixo peso, para o atendimento nutricional específico;Identificação dos portadores de doenças crônicas não transmissíveis (diabetes, hipertensão arterial, obesidade, entre outras) para o cuidado nutricional específico;Identificação dos distúrbios associados à alimentação (anorexia, bulimia, compulsão alimentar e outros transtornos alimentares);Identificação de fatores de risco para o estado nutricional em quaisquer fases do curso da vida;Identificação das condições gerais de saúde e de problemas de saúde bucal, encaminhando ao atendimento profissional específico, quando necessário;Identificação da possível existência de doenças infecciosas e parasitárias;Avaliação e monitoramento do consumo alimentar;",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Diagnóstico e monitoramento do estado nutricional das gestantes → Cartão da Gestante;Diagnóstico e monitoramento do estado nutricional das gestantes adolescentes;Avaliação do prognóstico da gestação em adolescentes, utilizando no diagnóstico a comparação das idades cronológica e ginecológica;Identificação das gestantes vivendo com HIV/AIDS ou com outras patologias que possam interferir em seu estado nutricional e nas condutas de orientação alimentar pré e pós-parto;Diagnóstico e monitoramento do consumo alimentar, das condutas e práticas alimentares da mulher na gestação e durante todo o período da amamentação;Detecção de dificuldades e distúrbios alimentares que interferem no estado nutricional na gestante;Detecção de dificuldades existentes para futura adesão ao aleitamento;Identificação dos sinais de deficiências nutricionais específicas, principalmente a anemia.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Avaliação do crescimento e desenvolvimento da criança para detecção precoce de problemas relacionados ao seu crescimento→ Caderneta de Saúde da Criança;Avaliação da prática de aleitamento materno;Avaliação do consumo alimentar da criança a partir do 6º mês de vida (introdução dos alimentos complementares);Verificação e registro do peso ao nascimento;Identificação dos sinais de deficiências nutricionais específicas (anemia e hipovitaminose A, dentre outras);Identificação de sinais clínicos e antropométricos de desnutrição;Identificação das crianças filhas de mulheres vivendo com HIV/AIDS ou com outras patologias que possam interferir em seu estado nutricional e nas condutas de orientação alimentar;Detecção precoce dos fatores associados ao desmame precoce (retorno ao trabalho, estado de saúde da mãe, aspectos culturais, apoio da família e do parceiro conjugal);Identificação e acompanhamento das condutas adotadas para a introdução da alimentação complementar e de sua evolução.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Avaliação do crescimento e desenvolvimento da criança para detecção precoce de problemas relacionados à curva de crescimento → Caderneta de Saúde da Criança;Avaliação da prática de aleitamento materno;Avaliação do consumo alimentar da criança;Identificação de deficiências nutricionais específicas (anemia e hipovitaminose A e outras);Identificação precoce dos sinais clínicos e antropométricos de desnutrição;Identificação das crianças filhas de mulheres vivendo com HIV/AIDS ou com outras patologias que possam interferir em seu estado nutricional e nas condutas de orientação alimentar;Identificação dos fatores que possam interferir na alimentação da criança (trabalho e estado de saúde da mãe, aspectos culturais, socioeconômicos, apoio da família e do parceiro conjugal);Identificação das práticas adotadas na alimentação da criança.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Avaliação do crescimento e desenvolvimento da criança para detecção precoce de problemas relacionados à curva de crescimento → Caderneta de Saúde da Criança;Avaliação do consumo alimentar da criança;Identificação dos sinais de deficiências nutricionais específicas (anemia, hipovitaminose A e outras);Identificação precoce dos sinais clínicos e antropométricos de desnutrição;Identificação das crianças  filhas de mulheres vivendo com HIV/AIDS ou com outras patologias que possam interferir em seu estado nutricional e nas condutas de orientação alimentar;Identificação dos fatores que possam interferir na alimentação da criança (trabalho e estado de saúde da mãe, aspectos culturais, socioeconômicos, apoio da família e do parceiro conjugal);Identificação e acompanhamento da evolução das práticas adotadas na alimentação da criança.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Avaliação do consumo alimentar da criança;Controle e avaliação do crescimento da criança;Identificação precoce do  sobrepeso/obesidade;Identificação precoce do baixo peso e da desnutrição;Identificação dos sinais de deficiências nutricionais específicas (anemia, hipovitaminose A e outras);Identificação dos escolares vivendo com HIV/AIDS ou com outras patologias que possam interferir em seu estado nutricional e nas condutas de orientação alimentar;Diagnóstico das condutas e práticas adotadas na alimentação do escolar no domicílio, na escola e em outras situações de convívio social.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Avaliação e controle do crescimento associados aos sinais de pubescência;Identificação precoce do sobrepeso/obesidade;Identificação precoce do baixo peso e da desnutrição;Detecção precoce dos transtornos alimentares (anorexia nervosa, bulimia nervosa, compulsão alimentar e outros);Identificação dos adolescentes vivendo com HIV/AIDS ou com outras patologias que possam interferir em seu estado nutricional e nas condutas de orientação alimentar;Diagnóstico das condutas e práticas adotadas na alimentação do adolescente, no domicílio, na escola e em outras situações de convívio social.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Avaliação e controle do estado nutricional;Detecção de fatores de risco para doenças crônicas não transmissíveis;Detecção do baixo peso, desnutrição, sobrepeso, obesidade e outras doenças crônicas não transmissíveis;Identificação de deficiências de micronutrientes;Identificação de adultos vivendo com HIV/AIDS ou com outras patologias que possam interferir em seu estado nutricional e nas condutas de orientação alimentar;Identificação das condutas e práticas adotadas na alimentação do adulto no domicílio, no trabalho e em outras situações de convívio social.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Avaliação e controle do estado nutricional do idoso;Identificação das limitações cognitivas, de locomoção e de autonomia do idoso que interfiram na sua alimentação;Identificação de dificuldades para se alimentar;Detecção precoce da perda de peso recente e da desnutrição;Detecção de fatores de risco para doenças crônicas não transmissíveis;Detecção do sobrepeso, obesidade e outras doenças crônicas não transmissíveis;Identificação das deficiências de micronutrientes;Identificação das possíveis interações entre drogas/ medicamentos e nutrientes.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Promoção e realização de educação alimentar e nutricional com ênfase na Promoção da Alimentação Saudável;Orientação para a alimentação saudável em todas as fases do curso da vida;Orientação da alimentação, com ênfase em práticas alimentares saudáveis e no consumo de alimentos regionais, com abordagem adequada à realidade local e às distintas fases do curso da vida;Ações educativas de Promoção da Alimentação Saudável considerando os fatores da vida moderna que influenciam os modos de vida: alimentação fora de casa, falta de tempo, limitações físicas etc;Promoção da adoção de modos de vida saudáveis;Promoção da manutenção do estado nutricional adequado em todas as fases do curso da vida;Promoção do peso saudável;Orientações para valorização e apoio ao aleitamento materno;Desenvolvimento de ações para fortalecimento do vínculo de cada indivíduo para com sua família, no âmbito de sua relação com o estado nutricional.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Acompanhamento da alimentação dos indivíduos em todas as fases do curso da vida;Educação em saúde com enfoque na orientação sobre noções básicas de higiene (corporal, ambiental, domiciliar, na manipulação de alimentos, saneamento ambiental, saúde bucal);Ações educativas e orientação para a prevenção das doenças mais prevalentes relacionadas à alimentação e nutrição (deficiências de micronutrientes - ferro, iodo e cálcio, ácido fólico, vitamina A e outras -, desnutrição e baixo peso, obesidade e demais doenças crônicas não transmissíveis e dos transtornos alimentares - anorexia, bulimia e outros);Acompanhamento periódico dos casos de doenças crônicas não transmissíveis, desnutrição, baixo peso e transtornos alimentares;Educação alimentar específica para problemas e situações de saúde que demandam dietas especiais.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação sobre os princípios da alimentação saudável da gestante;Ações educativas de prevenção a morbidades associadas à gestação (doenças hipertensivas específicas da gravidez, diabetes gestacional, anemia gestacional, obesidade e baixo peso);Reforço e valorização do acompanhamento pré-natal e do cumprimento do calendário de consultas no serviço de nutrição;Acompanhamento do ganho de peso durante o período gestacional;Acompanhamento alimentar durante o período gestacional;Suplementação preventiva de micronutrientes;Orientação sobre os princípios e técnicas do aleitamento materno e da alimentação complementar.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Observação do ato de amamentar, com correções das técnicas inadequadas;Observação das mamas (flacidez, fissuras de mamilo, etc.);Acompanhamento alimentar da mulher durante o período da amamentação;Orientação e acompanhamento da alimentação complementar;Acompanhamento do crescimento e desenvolvimento e estimulação dos fatores cognitivos relacionados à alimentação;Reforço da importância do cumprimento do calendário de consultas como instrumento para a promoção do estado nutricional da criança;Orientação sobre as doenças mais prevalentes na infância e/ ou as preveníveis por vacinação (diarréias, IRA, desidratação, doenças infecciosas e parasitárias etc.).",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação para a alimentação complementar;Acompanhamento da alimentação da criança;Acompanhamento da evolução das práticas adotadas na alimentação da criança, com correção oportuna;Incentivo à manutenção do aleitamento materno complementar até 2 anos de idade e seu monitoramento;Acompanhamento do crescimento, desenvolvimento e estimulação dos fatores cognitivos relacionados à alimentação;Suplementação preventiva de micronutrientes;Orientação sobre as doenças mais prevalentes na infância e/ ou as preveníveis por vacinação (diarréias, IRA, desidratação, doenças infecciosas e parasitárias etc.);Reforço da importância do cumprimento do calendário de consultas como instrumento para a promoção do estado nutricional da criança.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Acompanhamento e correção oportuna da alimentação da criança;Acompanhamento do crescimento, desenvolvimento e estimulação dos fatores cognitivos relacionados à alimentação;Orientação sobre as doenças mais prevalentes na infância e/ ou as preveníveis por vacinação (diarréias, IRA, desidratação, doenças infecciosas e parasitárias etc.);Suplementação preventiva de micronutrientes;Reforço da importância do cumprimento do calendário de consultas como instrumento para a promoção do estado nutricional da criança.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Acompanhamento da alimentação da criança;Ações educativas para a prevenção das doenças mais prevalentes associadas à alimentação e nutrição;Acompanhamento do desenvolvimento e crescimento da criança;Acompanhamento periódico dos casos de sobrepeso, obesidade, baixo peso, desnutrição e deficiências de micronutrientes.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Acompanhamento da alimentação do adolescente;Ações educativas para a prevenção das doenças mais prevalentes associadas à alimentação e nutrição;Acompanhamento do crescimento e desenvolvimento do adolescente;Acompanhamento periódico dos casos de sobrepeso, obesidade, baixo peso, desnutrição, anorexia nervosa, bulimia nervosa e outros transtornos alimentares.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Acompanhamento da alimentação do adulto;Ações educativas sobre a prevenção das doenças mais prevalentes associadas à alimentação e nutrição;Orientação para prevenção de doenças crônicas não transmissíveis e adoção de modos de vida saudáveis.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Acompanhamento da alimentação do adulto;Acompanhamento das mudanças fisiológicas e das condições de saúde do idoso que possam interferir em suas práticas alimentares;Ações educativas de valorização da alimentação como espaço de convívio familiar e integração do idoso à família e para manutenção de sua identidade;Ações educativas para prevenção das deficiências de micronutrientes e de outras doenças mais prevalentes associadas à alimentação e nutrição nessa fase da vida.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Atendimento nutricional individual, em ambulatório ou em domicílio;Elaboração da prescrição dietética, com base no diagnóstico nutricional, adequando-a à evolução do estado nutricional;Acompanhamento da evolução nutricional com registro no prontuário e no cartão de saúde;Solicitação de exames complementares necessários à avaliação nutricional, à prescrição dietética e à evolução nutricional do usuário dos serviços ou programas, quando pertinente;Definição dos procedimentos complementares na assistência nutricional ao usuário, em interação com a equipe multiprofissional;Encaminhamento dos usuários a outros profissionais habilitados, quando necessário, e considerando os protocolos adotados pelo serviço;Referência dos usuários a outros estabelecimentos de atenção à saúde, visando à complementação do tratamento, sempre que necessário, e de acordo com os protocolos do serviço;Prescrição de suplementos nutricionais, bem como de alimentos para fins especiais, em conformidade com a legislação vigente e com as normas (diretrizes terapêuticas) estabelecidas pelas Secretaria Estadual e Municipal de Saúde e Ministério da Saúde, quando necessários à complementação da dieta;Orientação do usuário e de seus familiares/responsáveis, quanto às técnicas higiênicas e dietéticas, relativas à alimentação;Avaliação da adesão do usuário ao tratamento dietoterápico;Tratamento dos casos de anemia e de hipovitaminose A ou outras deficiências de micronutrientes;Tratamento dietético com ênfase nos indivíduos com baixo peso, sobrepeso, portadores de doenças crônicas (diabetes, hipertensão arterial, osteoporose, dislipidemias, obesidade) ou transtornos alimentares (anorexia, bulimia e compulsão alimentar);Tratamento para recuperação/manutenção do estado nutricional;Encaminhamento de usuários em risco de insegurança alimentar e nutricional para programas de assistência alimentar, de geração de renda ou outras alternativas de proteção social, quando oportuno;Acompanhamento intensivo dos casos de usuários com comprometimento nutricional grave e persistente.Orientação alimentar e nutricional às pessoas vivendo com HIV/AIDS.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação dietética adequada às diferentes etapas do período gestacional;Orientação e acompanhamento do esquema alimentar da gestante;Orientação alimentar, tratamento e acompanhamento das gestantes em vulnerabilidade nutricional, de baixo peso ou com deficiência de micronutrientes e/ou outras morbidades associadas ao estado nutricional;Ações de manutenção/recuperação do estado nutricional e promoção do peso saudável da gestante;Assistência específica e diferenciada às gestantes adolescentes.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação alimentar da mulher durante o período da amamentação;Orientação, tratamento e acompanhamento de nutrizes em vulnerabilidade nutricional: baixo peso, deficiência de micronutrientes e/ou outras morbidades associadas ao estado nutricional;Ações de manutenção/recuperação do estado nutricional e promoção do peso saudável da nutriz;Orientação ou correção para adequação das técnicas de amamentação;Tratamento de problemas da mama que interfiram na amamentação;Ações e orientação para o realeitamento, quando necessário;Orientação alimentar para o período de transição alimentar e alimentação complementar da criança;Tratamento das diarréias, erros inatos de metabolismo e de alergias alimentares com base nos protocolos adotados pelo serviço.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação da introdução adequada de alimentos, segundo realidade local e com ênfase no consumo de alimentos regionais e no modo de preparo dos alimentos;Tratamento de crianças com alimentação inadequada com base nas diretrizes nacionais da alimentação complementar;Articulação com creche ou cuidador para adequar a alimentação da criança com estado nutricional inadequado;Tratamento das diarréias, erros inatos de metabolismo e de alergias alimentares com base nos protocolos adotados pelo serviço.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação da alimentação da criança;Tratamento de crianças com alimentação inadequada com base nas diretrizes nacionais da alimentação saudável;Articulação com a creche/escola e cuidadores para adequar a alimentação da criança com estado nutricional inadequado;Tratamento das diarréias, erros inatos de metabolismo e de alergias alimentares com base nos protocolos adotados pelo serviço.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação da alimentação da criança;Tratamento de crianças com alimentação inadequada com base nas diretrizes nacionais da alimentação saudável;Tratamento dos escolares com baixo peso/desnutrição, sobrepeso/obesidade, em associação com o cuidado psicológico e pediátrico;Articulação com a escola para adequar a alimentação do escolar com estado nutricional inadequado.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação alimentar do adolescente;Tratamento de adolescentes com alimentação inadequada com base nas diretrizes nacionais da alimentação saudável;Tratamento alimentar dos adolescentes com baixo peso/ desnutrição, sobrepeso/ obesidade ou transtornos alimentares (anorexia nervosa, bulimia nervosa, compulsão alimentar e outros), em associação com o cuidado psicológico e hebiátrico;Articulação com a escola para adequar a alimentação do adolescente com estado nutricional inadequado.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação da alimentação dos adultos;Orientações para recuperação e manutenção do peso saudável;Tratamento de homens e mulheres com alimentação inadequada com base nas diretrizes nacionais da alimentação saudável;Tratamento alimentar das pessoas com baixo peso/ desnutrição, sobrepeso/ obesidade e outras morbidades associadas ao estado nutricional.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação alimentar adaptada às mudanças fisiológicas e às condições de saúde do idoso;Tratamento dos idosos com alimentação inadequada com base nas diretrizes nacionais da alimentação saudável;Tratamento alimentar dos idosos com baixo peso/desnutrição, sobrepeso/obesidade e outras doenças crônicas não transmissíveis;Articulação com as instituições e pessoas cuidadoras do idoso para adequar a alimentação nos casos de estado nutricional inadequado.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Identificação das famílias em vulnerabilidade nutricional (variáveis: renda e escolaridade, condições de saneamento e de moradia, número de filhos/dependentes e características familiares: estrutura e dinâmica familiar, desagregação e caracterização da chefia familiar);Identificação das características de consumo alimentar da família: produção, disponibilidade de alimentos, aquisição, consumo, distribuição intrafamiliar, preparo de alimentos, cultura alimentar, participação em programas de assistência alimentar;Identificação das percepções, práticas alimentares aceitas e valores associados à alimentação da família e à alimentação da gestante, da nutriz, do pré- escolar, do escolar, do adolescente, do adulto e do idoso;Identificação de fatores associados ao comprometimento do estado nutricional das pessoas de quaisquer fases do curso da vida (gestantes, nutrizes, crianças, adolescentes, adultos ou idosos);Identificação das famílias com portadores de patologias e deficiências associadas à nutrição;Identificação das famílias com gestantes em vulnerabilidade nutricional e/ou com adolescentes grávidas;Identificação das percepções, práticas alimentares e valores associados à alimentação na gestação e durante o período da amamentação;Identificação do comportamento familiar para reforço da atitude da mãe e familiares, em relação ao aleitamento materno e aos cuidados com a criança;Avaliação da relação da criança com a família e dos cuidados da família para com a criança;Identificação do(s) responsável(eis) pelos cuidados com a criança (quem cuida da criança e quem é responsável pelo preparo e oferta dos alimentos);Identificação das percepções, práticas alimentares e valores associados à alimentação da criança (fases da transição e de alimentação complementar);Avaliação da relação do idoso com a família e dos cuidados da família para com o idoso;Identificação do(s) responsável(eis) pelos cuidados com o idoso com algum grau de dependência (quem cuida do idoso e quem é responsável pelo preparo e oferta de alimentos).",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Promoção e realização de educação alimentar e nutricional com ênfase na Promoção da Alimentação Saudável;Ações educativas para a valorização do consumo de alimentos regionais e, se pertinente, incentivo à produção doméstica de Frutas, Legumes e  Verduras (FLV);Ações de valorização da alimentação como momento de convívio familiar;Incentivo à adoção de práticas alimentares e modos de vida saudáveis no núcleo familiar/domicílio por todos os integrantes da família e de acordo com a fase do curso de vida;Orientações para valorização e apoio ao aleitamento materno;Orientação a respeito da influência da alimentação da família na formação de hábitos alimentares saudáveis de crianças e adolescentes;Desenvolvimento de ações para fortalecimento do vínculo criança-família no âmbito de sua relação com o estado nutricional;Orientação para organização da estrutura de apoio familiar aos idosos e promoção da integração do idoso à família;Desenvolvimento de ações de incentivo e apoio ao idoso para participação em grupos de convívio social (vizinhos, grupos de maior idade, atividades lúdicas, etc).",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Observação das dificuldades da família que possam interferir na saúde e nutrição das pessoas das famílias, de quaisquer fases do curso da vida;Apoio à reorganização e reversão da situação de insegurança alimentar e nutricional da família;Orientações básicas sobre higiene corporal e dos alimentos, saúde bucal, saneamento do domicílio e peridomicílio, com encaminhamento a estratégias de proteção e inclusão social, quando oportuno;Ações educativas de prevenção das deficiências de micronutrientes (ferro, ácido fólico, vitamina A, iodo e cálcio), da desnutrição e do baixo peso e dos transtornos alimentares (anorexia, bulimia e outros);Ações educativas de prevenção da deficiência de micronutrientes, do baixo peso e da obesidade na gestante, do diabetes gestacional, dos distúrbios hipertensivos da gravidez e outros;Ações educativas sobre as doenças mais prevalentes na infância (inclusive doenças infecciosas e parasitárias);Ações educativas para o controle e a prevenção das doenças crônicas não transmissíveis (obesidade, diabetes, hipertensão arterial, osteoporose e outras) e para o envelhecimento saudável;Ações educativas para incentivo à alimentação saudável, adaptada para as condições fisiológicas e de saúde do idoso;Participação das ações educativas para prevenção de doenças infecciosas e parasitárias e as DST-AIDS;Orientação para organização do apoio familiar à mulher durante o período gestacional, puerperal e no período de amamentação;Preparação da família, em especial o companheiro conjugal, para o aleitamento materno;Observação das dificuldades da família em decorrência de alterações da dinâmica familiar devidas à presença do bebê;Reforço e acompanhamento das orientações sobre a alimentação complementar da criança, com ênfase no esclarecimento de dúvidas existentes e condições higiênicas de preparo e armazenamento dos alimentos oferecidos às crianças;Esclarecimentos aos membros da família, em especial às pessoas mais velhas e que têm influência sobre a mulher, a respeito da introdução de alimentos complementares no esquema alimentar da criança;Observação das dificuldades da família que possam vir a interferir na saúde e nutrição do idoso, com ênfase naquelas relativas aos aspectos de integração/interação do idoso à família, limitações físicas e/ou psíquicas;Orientação para organização da estrutura de apoio familiar aos idosos com limitações físicas e/ou psíquicas;Orientação para organização da estrutura de apoio familiar a pessoas portadoras de deficiências físicas e/ou psíquicas.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Orientação e monitoramento, quando pertinente, dos procedimentos de preparo, manipulação, armazenamento, conservação e administração da alimentação, considerando os hábitos e condições sociais da família, de modo a garantir a qualidade higiênico-sanitária e o aporte nutricional adequado;Encaminhamento de famílias em risco de insegurança alimentar e nutricional para atendimento em programas de assistência alimentar, de geração de renda, inclusão social ou assistencial: programas de transferência de renda, estratégias ou ações locais de segurança alimentar e nutricional, de iniciativa pública ou não (ONGs e instituições filantrópicas), ou outras alternativas de proteção social disponíveis;Vigilância e apoio às famílias nas situações de desestruturação familiar (alcoolismo do pai ou mãe, abandono do lar), violência doméstica e abuso físico, sexual, psicológico (casos suspeitos ou confirmados), exploração do trabalho infantil, situação de abandono, buscando articulação e encaminhamento para setores públicos que tenham competência para solucionar essas dificuldades;Encaminhamento para confirmação do diagnóstico e tratamento dos indivíduos de quaisquer fases do curso da vida que apresentem vulnerabilidade de deficiência de micronutrientes, desnutrição, sobrepeso ou doenças crônicas não transmissíveis e outras morbidades associadas ao estado nutricional (distúrbios nutricionais e transtornos alimentares);Orientação e apoio para a adequação da situação alimentar da família;Acompanhamento e assistência específica a famílias em vulnerabilidade nutricional;Orientação para a organização do apoio familiar nos casos de membros portadores de distúrbios nutricionais e/ou transtornos alimentares;Orientação para a organização do apoio familiar ao indivíduo com limitações psíquicas e/ou físicas e idosos com algum grau de dependência que tenham impacto na alimentação;Orientação para a organização do apoio familiar à gestante, em especial à gestante adolescente;Orientação para a organização do apoio familiar à mãe para contribuir com a prática da amamentação e com os cuidados com a criança;Intensificação da assistência às famílias com casos de distúrbios e transtornos alimentares e outras morbidades associadas ao estado nutricional;Intensificação das visitas às famílias com pessoas com desnutrição, anemia e/ou limitações físicas e/ou psíquicas que interfiram na alimentação.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Mapeamento das áreas de risco de insegurança alimentar e nutricional (favelas, ocupações urbanas e rurais, áreas rurais e urbanas vulneráveis);Identificação de grupos na comunidade com maior vulnerabilidade à saúde e nutrição (agricultura de subsistência, áreas de extrativismo sazonal, povos indígenas, populações tradicionais, desempregados, subempregados, etc);Identificação das estratégias de segurança alimentar e nutricional disponíveis na comunidade (produção e disponibilidade de alimentos; rede de apoio alimentar, geração de emprego e renda e programas sociais);Identificação das características da comunidade tais como condições de saneamento (água, esgoto, lixo), infraestrutura de abastecimento de alimentos, comércio e preços dos alimentos, renda e empregos, cultura alimentar predominante, lideranças locais e levantamento dos principais problemas da comunidade;Identificação da estrutura e da disponibilidade de serviços de saúde, educação (escolas e creches), centros profissionalizantes, culturais ou de socialização e centros de apoio/assistência social à população ou a segmento populacional em situação de vulnerabilidade social/exclusão disponíveis no local;Identificação de determinantes ambientais e econômicos na comunidade que podem afetar o estado nutricional e a saúde dos moradores de quaisquer fases do curso da vida;Coleta, consolidação, análise e avaliação dos dados de vigilância alimentar e nutricional da população;Identificação d a relação de integração dos serviços de saúde com as escolas e outros equipamentos sociais da comunidade;Identificação da estrutura comunitária de apoio aos cuidados com a criança e com as gestantes (creches, escolas, associações, grupos de mulheres, casas-abrigo, casas-lares, conselhos tutelares);Identificação da estrutura comunitária de apoio à prática de amamentação (creches, escolas, associações, sindicatos patronais e de trabalhadores, grupos de mulheres);Identificação da estrutura comunitária de apoio às famílias com idosos em vulnerabilidade nutricional (centros de convivência de idosos, clubes, associações, grupos da terceira idade, casas de repouso e acolhimento de idosos, grupos de mulheres).",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Promoção da Alimentação Saudável e de ações de educação alimentar e nutricional em espaços comunitários;Promoção das boas práticas de higiene e manipulação dos alimentos colocados para consumo na comunidade (comercialização e manipulação/oferta de alimentos preparados) e saneamento do ambiente e articulação com a vigilância em saúde local para intensificação de ações de controle sanitário;Valorização e estímulo para a produção, comercialização e consumo de alimentos regionais saudáveis;Estímulo à utilização de alimentos regionais saudáveis na alimentação da comunidade (nas casas e nas instituições);Ações educativas na escola, creches e outros equipamentos sociais para fomentar hábitos alimentares adequados;Discussão com a comunidade sobre os determinantes do estado nutricional de seus integrantes;Discussão com a comunidade sobre segurança alimentar, nutricional e Direito Humano à Alimentação Adequada;Incentivo e estratégias de apoio comunitário à prática do aleitamento materno;Divulgação das orientações para a introdução de alimentos complementares no esquema alimentar da criança, identificando estratégias locais de comunicação e informação;Orientação para introdução de alimentação complementar segundo a cultura alimentar local, nas instituições e equipamentos sociais que acolhem e cuidam de crianças da comunidade;Fomento à formação de grupos comunitários para discussão e esclarecimentos sobre os problemas de saúde e ações de proteção e inclusão social disponíveis;Desenvolvimento de ações para promover ambientes saudáveis em espaços comunitários como escolas, locais de trabalho, creches etc;Promoção da integração do idoso à comunidade.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Ações educativas de prevenção das deficiências de micronutrientes (ferro, ácido fólico, vitamina A, iodo e cálcio), da desnutrição e do baixo peso e dos transtornos alimentares (anorexia, bulimia e outros);Ações educativas sobre as doenças mais prevalentes na infância (inclusive doenças infecciosas e parasitárias);Ações educativas para o controle e a prevenção das doenças crônicas não transmissíveis (obesidade, diabetes, hipertensão arterial, osteoporose eoutras) e para o envelhecimento saudável;Ações educativas para incentivo à alimentação saudável, adaptada para as condições fisiológicas e de saúde dos idosos;Ações educativas sobre cuidados com a manipulação de alimentos, higiene corporal e bucal e saneamento ambiental;Divulgação e reforço das orientações sobre alimentação infantil e higiene na manipulação dos alimentos;Divulgação de orientações sobre alimentação do escolar e do adolescente, e sobre o comportamento alimentar com ênfase na prevenção dos distúrbios alimentares e da obesidade nos espaços de convívio desses grupos na comunidade;Associação com instituições, escolas e Organizações Não Governamentais para desenvolvimento de ações educativas em alimentação e nutrição.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        information: "Acompanhamento e apoio comunitário aos grupos de elevada vulnerabilidade social (gestantes carentes, gestantes adolescentes, agricultores sem terra, povos indígenas, populações tradicionais, população residente em áreas de risco de insegurança alimentar e nutricional, desempregados, população albergada etc.);Fortalecimento das estratégias locais de segurança alimentar e nutricional com priorização das famílias e de pessoas em quaisquer fases do curso da vida que estejam em situação de vulnerabilidade;Orientação da rede de apoio e de ambiente social para acolhimento e cuidado às famílias e às pessoas em vulnerabilidade nutricional ou com casos de deficiências de micronutrientes e morbidades associadas ao estado nutricional;Estímulo à inclusão de alimentos saudáveis nos programas e ações de assistência alimentar disponíveis na comunidade, com ênfase nos regionais produzidos localmente;Estímulo à participação organizada da comunidade nos conselhos de controle social;Busca ativa casos/pessoas de maior vulnerabilidade nutricional.",
        created_at: new Date(),
        updated_at: new Date()
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('actions', null, {});
  }
};
