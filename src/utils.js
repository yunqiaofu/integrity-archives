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
