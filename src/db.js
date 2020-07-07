
const db = {
  name: '',
  idCard: '',
  nation: '', // 民族
  politicsStatus: '', // 政治面貌
  work: '', // 工作单位
  department: '', // 部门
  duty: '', // 现任职务
  partyTime: '', // 入党时间
  // 枚举值:{1:'区管干部',2:'纪检干部',3:'人大代表(区级及其以上)',4:'党代表(区级及其以上)',5:'政协委员(区级及其以上)'}
  identity: [], // 人员身份 枚举
  householdRegistration: '', // 户籍地址
  currentResidence: '', // 现居住地
  personalResume: '', // 个人简历
  password: '',
  checkPassword: '',
  imageUrl: '', // 照片
  other: '',
  // 人脉关系
  networking: [
    {
      relationship: '', // 本人关系
      name: '',
      birth: '', // 出生年月
      politicsStatus: '',
      work: ''
    }
  ],
  // 工作考核情况
  workAssessment: [
    {
      time: '', // 年度
      assessment: '', // 考核情况
      agency: '', // 发文机关
      symbol: '', // 文号
      desc: ''// 备注
    }
  ],
  // 评先评优
  recommendation: [
    {
      time: '',
      name: '',
      organization: '', // 表彰机关
      symbol: '', // 文号
      desc: ''// 备注
    }
  ],
  // 搜惩处情况
  punishment: [{
    time: '',
    disposition: '', // 所受处分
    dispositionReasons: '', // 所受处分原因
    dispositionOrgans: '', // 惩处机关
    symbol: '', // 文号
    desc: ''
  }],
  // 婚姻情况
  marriage: [{
    change: '', // 变化情况
    time: '',
    reasons: ''
  }],
  // 出国证件情况
  travelDocuments: [{
    name: '', // 证件名称
    number: '', // 证件号码
    Licensing: '', // 发证机关
    time: '', // 发证时间
    validity: '', // 有效期
    custodyInstitutions: ''// 保管机构
  }],
  // 出国情况
  travelAbroad: [{
    startTime: '',
    endTime: '',
    country: '',
    reasons: '', // 出国事由
    approvalAuthority: '', // 审批机构
    agency: ''// 代办机构
  }],
  // 子女与无国籍外国人婚姻情况
  childMarriageForeigners: [{
    title: '', // 称谓
    name: '', // 姓名
    spouseName: '', // 配偶姓名
    spouseCountry: '', // 配偶姓名国籍
    spouseWork: '', // 配偶单位
    spouseDuty: '', // 配偶职位
    time: ''// 登记时间
  }],
  // 子女与台湾婚姻情况
  childMarriageTaiwan: [{
    title: '', // 称谓
    name: '', // 姓名
    spouseName: '', // 配偶姓名
    spouseCountry: '', // 配偶姓名国籍
    spouseWork: '', // 配偶单位
    spouseDuty: '', // 配偶职位
    time: ''// 登记时间
  }],
  // 配偶子女移居海外
  childMoved: [{
    title: '', // 称谓
    name: '', // 姓名
    country: '', // 移居国家
    city: '', // 居住城市
    card: '', // 移居国家证件号码
    type: '', // 移居类别
    time: '', // 移居时间
    desc: ''
  }],
  // 配偶子女从业情况
  practice: [{
    title: '', // 称谓
    name: '', // 姓名
    isLife: '', // 是否共同生活
    work: '', // 工作单位
    duty: '', // 现在职务
    unitNature: '', // 单位性质
    cardName: '', // 证件名称
    card: '' // 证件号码
  }],
  // 配偶子女刑事责任情况
  criminal: [{
    title: '', // 称谓
    name: '', // 姓名
    time: '', // 被追究时间
    reasons: '', // 被追究责任原因
    status: '', // 处理阶段
    result: '' // 处理结果
  }],
  // 配偶子女房产情况
  realEstate: [{
    people: '', // 产权人
    relationship: '', // 与本人关系
    source: '', // 房产来源
    address: '', // 具体地址
    area: '', // 建筑面积
    propertyNature: '', // 产权性质
    transactionTime: '', // 交易时间
    transactionPrice: '' // 交易价格
  }],
  // 本人配偶注册工商户,个人独资企业或合伙企业
  partnership: [{
    title: '', // 称谓
    name: '',
    marketSubject: '', // 市场主体
    businessScope: '', // 经营范围
    marketSubjectType: '', // 市场主体类型
    money: '', // 资金数额
    personalContribution: '', // 个人出资数额
    fundedRatio: '' // 出资比例
  }],
  // 本人配偶车辆情况
  car: [{
    brand: '', // 品牌
    time: '', // 购买时间
    price: '', // 价格
    carNumber: '', // 车牌号
    color: '',
    desc: '' // 备注
  }]
}
export default db
