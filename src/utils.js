// 性别
export const gender = {
  1: '男',
  2: '女'
}
// 在职状态
export const workingStatus = {
  1: '在职',
  2: '退出现职尚未办理退休手续'
}
// 男的亲属关系
export const manRelationship = [
  { key: '01', value: '妻子' },
  { key: '02', value: '儿女' },
  { key: '03', value: '父母' },
  { key: '04', value: '岳父母' },
  { key: '05', value: '兄和兄嫂' },
  { key: '06', value: '弟和弟媳' },
  { key: '07', value: '姐和姐夫' },
  { key: '08', value: '妹和妹夫' },
  { key: '09', value: '妻兄和妻兄嫂' },
  { key: '10', value: '妻弟和妻弟媳' },
  { key: '11', value: '妻姐和妻姐夫' },
  { key: '12', value: '妻妹和妻妹夫' },
  { key: '13', value: '侄儿侄女' },
  { key: '14', value: '外甥外甥女' },
  { key: '15', value: '妻侄儿侄女' },
  { key: '16', value: '妻外甥外甥女' }
]
// 女的亲属关系
export const womenRelationship = [
  { key: '01', value: '丈夫' },
  { key: '02', value: '儿女' },
  { key: '03', value: '父母' },
  { key: '04', value: '公婆' },
  { key: '05', value: '兄和兄嫂' },
  { key: '06', value: '弟和弟媳' },
  { key: '07', value: '姐和姐夫' },
  { key: '08', value: '妹和妹夫' },
  { key: '09', value: '夫兄和夫兄嫂' },
  { key: '10', value: '夫弟和夫弟媳' },
  { key: '11', value: '夫姐和夫姐夫' },
  { key: '12', value: '夫妹和夫妹夫' },
  { key: '13', value: '侄儿侄女' },
  { key: '14', value: '外甥外甥女' },
  { key: '15', value: '夫侄儿侄女' },
  { key: '16', value: '夫外甥外甥女' }
]

// 身份枚举
export const identity = {
  1: '区管干部',
  2: '纪检干部',
  3: '人大代表(区级及其以上)',
  4: '党代表(区级及其以上)',
  5: '政协委员(区级及其以上)'
}
// 所有民族枚举
export const nation = {
  汉族: '汉族',
  蒙古族: '蒙古族',
  回族: '回族',
  藏族: '藏族',
  维吾尔族: '维吾尔族',
  苗族: '苗族',
  彝族: '彝族',
  壮族: '壮族',
  布依族: '布依族',
  朝鲜族: '朝鲜族',
  满族: '满族',
  侗族: '侗族',
  瑶族: '瑶族',
  白族: '白族',
  土家族: '土家族',
  哈尼族: '哈尼族',
  哈萨克族: '哈萨克族',
  傣族: '傣族',
  黎族: '黎族',
  傈僳族: '傈僳族',
  佤族: '佤族',
  畲族: '畲族',
  高山族: '高山族',
  拉祜族: '拉祜族',
  水族: '水族',
  东乡族: '东乡族',
  纳西族: '纳西族',
  景颇族: '景颇族',
  柯尔克孜族: '柯尔克孜族',
  土族: '土族',
  达斡尔族: '达斡尔族',
  仫佬族: '仫佬族',
  羌族: '羌族',
  布朗族: '布朗族',
  撒拉族: '撒拉族',
  毛南族: '毛南族',
  仡佬族: '仡佬族',
  锡伯族: '锡伯族',
  阿昌族: '阿昌族',
  普米族: '普米族',
  塔吉克族: '塔吉克族',
  怒族: '怒族',
  乌孜别克族: '乌孜别克族',
  俄罗斯族: '俄罗斯族',
  鄂温克族: '鄂温克族',
  德昂族: '德昂族',
  保安族: '保安族',
  裕固族: '裕固族',
  京族: '京族',
  塔塔尔族: '塔塔尔族',
  独龙族: '独龙族',
  鄂伦春族: '鄂伦春族',
  赫哲族: '赫哲族',
  门巴族: '门巴族',
  珞巴族: '珞巴族'
}

// 政治面貌
export const politicsStatus = {
  '01': '中共党员',
  '02': '中共预备党员',
  '03': '共青团员',
  '04': '民革党员',
  '05': '民盟盟员',
  '06': '民建会员',
  '07': '民进会员',
  '08': '农工党党员',
  '09': '致公党党员',
  10: '九三学社社员',
  11: '台盟盟员',
  12: '无党派人士',
  13: '群众（现称普通居民，与居民身份证相对应）'
}
// 基本信息 工作单位
export const workOrganization = [
  { key: '01', value: '纪委（监委）' },
  { key: '02', value: '区委办' },
  { key: '03', value: '组织部' },
  { key: '04', value: '宣传部' },
  { key: '05', value: '统战部' },
  { key: '06', value: '信访部' },
  { key: '07', value: '政务-记过' },
  { key: '08', value: '老干部局' },
  { key: '09', value: '政法委' },
  { key: '10', value: '编办' },
  { key: '11', value: '改革办' },
  { key: '12', value: '巡察版' },
  { key: '13', value: '人大' },
  { key: '14', value: '区府办' },
  { key: '15', value: '发改局' },
  { key: '16', value: '经信局' },
  { key: '17', value: '民政局' },
  { key: '18', value: '财政局' },
  { key: '19', value: '教育局' },
  { key: '20', value: '科技局' },
  { key: '21', value: '新闻传媒中心' },
  { key: '22', value: '广播电视台' },
  { key: '23', value: '文旅局' },
  { key: '24', value: '住建局' },
  { key: '25', value: '规自局' },
  { key: '26', value: '生态环境局临安分局' },
  { key: '27', value: '交通运输局' },
  { key: '28', value: '水利水电局' },
  { key: '29', value: '审计局' },
  { key: '30', value: '统计局' },
  { key: '31', value: '应急管理局' },
  { key: '32', value: '城市管理局' },
  { key: '33', value: '商务局' },
  { key: '34', value: '人力社保局' },
  { key: '35', value: '市场监督局' },
  { key: '36', value: '卫生健康局' },
  { key: '37', value: '农业农村局' },
  { key: '38', value: '公安分局' },
  { key: '39', value: '司法局' },
  { key: '40', value: '退役军人事务局' },
  { key: '41', value: '数据资源管理局' },
  { key: '42', value: '机关事务服务中心' },
  { key: '43', value: '市医疗保障局临安分局' },
  { key: '44', value: '政协' },
  { key: '45', value: '总工会' },
  { key: '46', value: '团区委' },
  { key: '47', value: '妇联' },
  { key: '48', value: '科协' },
  { key: '49', value: '文联' },
  { key: '50', value: '工商联' },
  { key: '51', value: '审管办' },
  { key: '52', value: '住房公积金临安分中心' },
  { key: '53', value: '国兴公司' },
  { key: '54', value: '供销总社' },
  { key: '55', value: '清凉峰管理局' },
  { key: '56', value: '青山湖管理局' },
  { key: '57', value: '天目山管理局' },
  { key: '58', value: '青山湖科技城管委会' },
  { key: '59', value: '清凉峰旅游度假区管委会' },
  { key: '60', value: '锦南新城管委会' },
  { key: '61', value: '城投公司' },
  { key: '62', value: '科投公司' },
  { key: '63', value: '新锦公司' },
  { key: '64', value: '锦城街道' },
  { key: '65', value: '锦南街道' },
  { key: '66', value: '玲珑街道' },
  { key: '67', value: '青山湖街道' },
  { key: '68', value: '锦北街道' },
  { key: '69', value: '高虹镇' },
  { key: '70', value: '太湖源镇' },
  { key: '71', value: '板桥镇' },
  { key: '72', value: '於潜镇' },
  { key: '73', value: '潜川镇' },
  { key: '74', value: '天目山镇' },
  { key: '75', value: '太阳镇' },
  { key: '76', value: '昌化镇' },
  { key: '77', value: '清凉峰镇' },
  { key: '78', value: '湍口镇' },
  { key: '79', value: '龙岗镇' },
  { key: '80', value: '河桥镇' },
  { key: '81', value: '岛石镇' },
  { key: '82', value: '法院' },
  { key: '83', value: '检察院' },
  { key: '84', value: '档案服务中心' },
  { key: '85', value: '党校' },
  { key: '86', value: '党史研究室' },
  { key: '87', value: '社科联' },
  { key: '88', value: '红十字会' },
  { key: '89', value: '残联' },
  { key: '90', value: '侨联' }
]

// 基本信息 与本人关系 Relationship
export const relationship = [
  { key: '01', value: '父亲' },
  { key: '02', value: '母亲' },
  { key: '03', value: '岳父' },
  { key: '04', value: '岳母' },
  { key: '05', value: '公公' },
  { key: '06', value: '婆婆' },
  { key: '07', value: '丈夫' },
  { key: '08', value: '妻子' },
  { key: '09', value: '儿子' },
  { key: '10', value: '女儿' },
  { key: '11', value: '兄弟' },
  { key: '12', value: '姐妹' },
  { key: '13', value: '妻兄（弟）' },
  { key: '14', value: '妻姐（妹）' },
  { key: '15', value: '夫兄（弟）' },
  { key: '16', value: '夫姐（妹）' },
  { key: '17', value: '女婿' },
  { key: '18', value: '媳妇' }
]

// 表1 考核情况
export const assessment = [
  { key: '01', value: '优秀' },
  { key: '02', value: '称职（合格）' },
  { key: '03', value: '基本称职（基本合格）' },
  { key: '04', value: '不称职（不合格）' },
  { key: '05', value: '未定等级（不定等级）' }
]
// 表3 所受处分
export const punishment = [
  { key: '01', value: '党纪-警告' },
  { key: '02', value: '党纪-严重警告' },
  { key: '03', value: '党纪-撤销党内职务' },
  { key: '04', value: '党纪-留党察看' },
  { key: '05', value: '党纪-开除党纪' },
  { key: '06', value: '政务-警告' },
  { key: '07', value: '政务-记过' },
  { key: '08', value: '政务-记大过' },
  { key: '09', value: '政务-降级' },
  { key: '10', value: '政务-撤职' },
  { key: '11', value: '政务-开除' }
]
// 表4 婚姻情况
export const marriage = [
  { key: '01', value: '未婚' },
  { key: '02', value: '结婚' },
  { key: '03', value: '再婚' },
  { key: '04', value: '离婚' },
  { key: '05', value: '丧偶' }
]
// 表5 证件名称
export const identification = [
  { key: '01', value: '因私普通护照' },
  { key: '02', value: '内地居民往来港澳通行证' },
  { key: '03', value: '大陆居民往来台湾通行证' },
  { key: '04', value: '其他因私出国（境）证件' }
]
// 表7 表8 称谓
export const childrenType = [
  { key: '01', value: '儿子' },
  { key: '02', value: '女儿' }
]
// 表9 称谓
export const familiesType = [
  { key: '01', value: '妻子' },
  { key: '02', value: '丈夫' },
  { key: '03', value: '儿子' },
  { key: '04', value: '女儿' }
]
// 表9 移居类别
export const migrate = [
  { key: '01', value: '外国国籍' },
  { key: '02', value: '永久居留权' },
  { key: '03', value: '长期居留许可' }
]
// 表10  称谓
export const familiesType10 = [
  { key: '01', value: '配偶' },
  { key: '02', value: '儿子' },
  { key: '03', value: '女儿' }
]
// 表10  是否共同生活
export const livingTogether = [
  { key: '01', value: '是' },
  { key: '02', value: '否' }
]
// 表10 单位性质
export const unitProperties = [
  { key: '01', value: '党政机关' },
  { key: '02', value: '事业单位' },
  { key: '03', value: '国有企业' },
  { key: '04', value: '合资企业' },
  { key: '05', value: '外资企业' },
  { key: '06', value: '私营企业' },
  { key: '07', value: '军队' },
  { key: '08', value: '在校学生' },
  { key: '09', value: '其他' },
  { key: '10', value: '国（境）外' }
]
// 表10 证件名称
export const identification10 = [
  { key: '01', value: '居民身份证' },
  { key: '02', value: '军官证' },
  { key: '03', value: '其他' }
]
// 表11 称谓 <===同===> 表9 称谓
// 表11 处理阶段
export const punishStage = [
  { key: '01', value: '立案侦查' },
  { key: '02', value: '审查起诉' },
  { key: '03', value: '提起公诉' },
  { key: '04', value: '依法判处刑罚' },
  { key: '05', value: '其他' }
]
// 表12 与本人关系
export const relationshipWithMyself = [
  { key: '01', value: '本人' },
  { key: '02', value: '配偶' },
  { key: '03', value: '儿子' },
  { key: '04', value: '女儿' }
]
// 表12 房产来源（去向）
export const houseProperty = [
  { key: '01', value: '购买' },
  { key: '02', value: '继承' },
  { key: '03', value: '接受赠与' },
  { key: '04', value: '其他来源' },
  { key: '05', value: '出售' },
  { key: '06', value: '赠与他人' },
  { key: '07', value: '其他去向' }
]
// 表12 产权性质
export const propertyRight = [
  { key: '01', value: '商品房' },
  { key: '02', value: '福利房' },
  { key: '03', value: '经济适用房' },
  { key: '04', value: '限价房' },
  { key: '05', value: '自建房' },
  { key: '06', value: '车库（车位、储藏室）' },
  { key: '07', value: '其他' }
]
// 表13 称谓 <===同===> 表12 与本人关系
// 表13 市场主体类型
export const marketEntities = [
  { key: '01', value: '个体工商户' },
  { key: '02', value: '个人独资企业' },
  { key: '03', value: '合伙企业' },
  { key: '04', value: '有限责任公司' },
  { key: '05', value: '农民专业合作社' }
]
