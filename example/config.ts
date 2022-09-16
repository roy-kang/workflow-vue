export default {
  path: [
    {
      name: 'name',
      label: '编码',
      type: 'input',
      value: ''
    },
    {
      name: 'expr',
      label: '决策表达式',
      type: 'input',
      value: ''
    }
  ],
  nodes: [
    {
      displayName: '开始',
      name: 'start',
      className: 'icon-circle start',
      label: '开始',
      attr: {
        w: 70,
        x: 0,
        h: 70,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: 'start',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        }
      ]
    },
    {
      displayName: '结束',
      name: 'end',
      className: 'icon-circle end',
      label: '结束',
      attr: {
        w: 70,
        x: 0,
        h: 70,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: 'end',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        }
      ]
    },
    {
      displayName: '审批任务',
      name: 'task',
      className: '',
      label: '审批节点',
      attr: {
        w: 100,
        x: 0,
        h: 38,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: '',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        },
        {
          name: 'groupName',
          label: '组名称',
          type: 'input',
          value: ''
        },
        {
          name: 'performType',
          label: '参与类型',
          type: 'select',
          value: 'ANY'
        },
        {
          name: 'visible',
          label: '是否显示',
          type: 'select',
          value: ''
        },
        {
          name: 'taskType',
          label: '任务类型',
          type: 'select',
          attr: {
            w: 100,
            x: 0,
            h: 38,
            y: 0
          },
          value: 'Major'
        }
      ]
    },
    {
      displayName: '脚本节点',
      name: 'custom',
      className: '',
      label: '脚本节点',
      attr: {
        w: 100,
        x: 0,
        h: 38,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: '',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        },
        {
          name: 'groupName',
          label: '组名称',
          type: 'input',
          value: ''
        },
        {
          name: 'visible',
          label: '是否显示',
          type: 'select',
          value: ''
        },
        {
          name: 'async',
          label: '是否异步',
          type: 'select',
          value: ''
        },
        {
          name: 'scriptCode',
          label: '脚本编码',
          type: 'select',
          value: '',
          required: true,
          props: {
            filterable: true,
            placeholder: '请输入编码'
          }
        }
      ]
    },
    {
      displayName: '业务节点',
      name: 'business',
      className: '',
      label: '业务节点',
      attr: {
        w: 100,
        x: 0,
        h: 38,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: '',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        },
        {
          name: 'groupName',
          label: '组名称',
          type: 'input',
          value: ''
        },
        {
          name: 'formType',
          label: '表单类型',
          type: 'select',
          value: '',
          required: true,
          props: {
            placeholder: '请输入表单类型'
          }
        },
        {
          name: 'form',
          label: '表单资源',
          type: 'input',
          value: '',
          required: true,
          props: {
            placeholder: '请输入表单资源'
          }
        },
        {
          name: 'visible',
          label: '是否显示',
          type: 'select',
          value: ''
        },
        {
          name: 'disable',
          label: '是否禁用',
          type: 'select',
          value: ''
        }
      ]
    },
    {
      displayName: '分支-决策',
      name: 'decision',
      className: '',
      label: '分支-决策',
      attr: {
        w: 100,
        x: 0,
        h: 38,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: '',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        },
        {
          name: 'expr',
          label: '决策表达式',
          type: 'input',
          value: ''
        }
      ]
    },
    {
      displayName: '分支-并行',
      name: 'fork',
      className: '',
      label: '分支-并行',
      attr: {
        w: 100,
        x: 0,
        h: 38,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: '',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        }
      ]
    },
    {
      displayName: '分支-合并',
      name: 'join',
      className: '',
      label: '分支-合并',
      attr: {
        w: 100,
        x: 0,
        h: 38,
        y: 0
      },
      props: [
        {
          name: 'name',
          disabled: true,
          label: '编码',
          type: 'input',
          value: '',
          required: true,
          props: {
            placeholder: '请输入编码'
          }
        }
      ]
    }
  ],
  options: {
    async: [
      {
        label: '是',
        value: '1'
      },
      {
        label: '否',
        value: '0'
      }
    ],
    scriptCode: [
      {
        label: '销项核心赠险视同销售接口数据清洗',
        value: 'PFCleanCoreInsuranceSales'
      },
      {
        label: '销项收入汇总_其他业务收入(EBS_OTHERINCOME)',
        value: 'EBS_OTHERINCOME'
      },
      {
        label: '获取税务事项数据(taxMatter)',
        value: 'taxMatterInfo'
      },
      {
        label: '销项收入汇总_投资收益利息收入(EBS_INTERESTRATE)',
        value: 'EBS_INTERESTRATE'
      },
      {
        label: '管理报表数据集参数封装(mtTableParamCreate)',
        value: 'mtTableParamCreate'
      },
      {
        label: '销项收入汇总_销项汇总报表税额提取',
        value: 'EBS_TAX_PAYABLE'
      },
      {
        label: '税额抵减汇总VAT_STD_TCS',
        value: 'VAT_STD_TCS'
      },
      {
        label: '销项费控视同销售清单接口数据清洗脚本',
        value: 'PFCleanExpanceSales'
      },
      {
        label: '存量投资产品（利息收入）重新匹配',
        value: 'PFVatOStockInterestRepeatMatch'
      },
      {
        label: '销项保费收入-重新匹配脚本',
        value: 'PFPremiumRepeatMatch'
      },
      {
        label: '进项汇总VAT_STD_IS',
        value: 'VAT_STD_IS'
      },
      {
        label: '获取项目明细数据(projectInfo)',
        value: 'projectInfo'
      },
      {
        label: '申请类型数据转换',
        value: 'declareTypeMapping'
      },
      {
        label: '销项收入汇总_保费收入（EBS_PREMIUMINIRATE）',
        value: 'EBS_PREMIUMINIRATE'
      },
      {
        label: '销项收入汇总_利息收入(EBS_POLICYRATE)',
        value: 'EBS_POLICYRATE'
      },
      {
        label: '增值税税额填充',
        value: 'VAT_TAX_FILLING'
      },
      {
        label: '进项销管中介手续费接口接入数据清洗脚本',
        value: 'PFCleanIsmsAgency'
      },
      {
        label: '印花税报表数据集获取脚本',
        value: 'StampDataSet'
      },
      {
        label: 'dataSupport',
        value: 'dataSupport'
      },
      {
        label: '投资收入科目税率配置重新匹配',
        value: 'PFVatOIncrProductRepeatMatch'
      },
      {
        label: '按比例进项转出税额计算',
        value: 'workBookCasScript'
      },
      {
        label: 'attachedList3',
        value: 'attachedList3'
      },
      {
        label: 'ybxmbnlj',
        value: 'ybxmbnlj'
      },
      {
        label: '销项收入汇总_投资收益价差收入(EBS_DIFFRATE)',
        value: 'EBS_DIFFRATE'
      },
      {
        label: 'attachedList4',
        value: 'attachedList4'
      },
      {
        label: '存量投资产品（价差收入）清洗脚本',
        value: 'PFVatOStockDiff'
      },
      {
        label: '印花税税额提取',
        value: 'STAMP_TAX_PAYABLE'
      },
      {
        label: '销项汇总VAT_STD_OS',
        value: 'VAT_STD_OS'
      },
      {
        label: '销项收入汇总_销项汇总数据入库',
        value: 'EBS_DATA_SAVE_DB'
      },
      {
        label: '复保销项台账分发脚本',
        value: 'PfStdDistribute'
      },
      {
        label: '销项收入汇总_费控视同销售收入(EBS_EXPENSERATE)',
        value: 'EBS_EXPENSERATE'
      },
      {
        label: '获取纳税主体模版',
        value: 'getRepotTemplateCode'
      },
      {
        label: '进项其它业务台账清晰脚本',
        value: 'PFDataCleanAgent'
      },
      {
        label: '印花税数据初始化',
        value: 'STAMP_INIT'
      },
      {
        label: '存量投资产品（价差收入）重新匹配',
        value: 'PFVatOStockDiffRepeatMatch'
      },
      {
        label: '销项汇总报表数据初始化',
        value: 'EBS_DILLING_PROJECT_INIT'
      },
      {
        label: '印花税报表供数',
        value: 'STAMP_DATA_SUPPORT'
      },
      {
        label: 'stockdiff',
        value: 'stockdiff'
      },
      {
        label: '进项费控手动导入数据清洗',
        value: 'PFCleanExpanceManualImport'
      },
      {
        label: '按比例进项转出汇总VAT_STD_ITCS',
        value: 'VAT_STD_ITCS'
      },
      {
        label: '销项其它业务涉税台账重新匹配脚本',
        value: 'PFOtherIncomeRepeatMatch'
      },
      {
        label: '投资收入科目税率配置清洗脚本',
        value: 'PFVatOIncrProduct'
      },
      {
        label: '进项费控台账重新匹配',
        value: 'PFVatIExpenseRepeatMatch'
      },
      {
        label: '印花税数据回写',
        value: 'StmpDataSaveDb'
      },
      {
        label: '存量投资产品（利息收入）数据清洗',
        value: 'PFVatOStockInterest'
      },
      {
        label: '销项营业外收入及其他收益手工台账',
        value: 'PFVatONonBusIncome'
      },
      {
        label: '销项发票汇总VAT_STD_OIS',
        value: 'VAT_STD_OIS'
      },
      {
        label: '增值税数据初始化',
        value: 'VAT_FILLING_PROJECT_INIT'
      },
      {
        label: '进项费控报销接口接入数据清洗脚本',
        value: 'PFCleanExpance'
      },
      {
        label: '印花税合同清单数据清洗脚本',
        value: 'PFCleanContract'
      },
      {
        label: '销项保单利息台账重新匹配脚本',
        value: 'PFPolicyInterestRepeatMatch'
      },
      {
        label: '销项收入汇总_赠险视同销售收入(EBS_INSURANCERATE)',
        value: 'EBS_INSURANCERATE'
      },
      {
        label: '销项收入汇总_EBS帐套数据(EBS_PF)',
        value: 'EBS_PF'
      },
      {
        label: '增值税标准台账清洗脚本VAT_STD_DATA_CLEAN',
        value: 'VAT_STD_DATA_CLEAN'
      },
      {
        label: '印花税核心系统保单贷款接口数据清洗',
        value: 'PFCleanCorePolicyLoans'
      },
      {
        label: '销项收入汇总_销项汇总供数',
        value: 'EBS_DATA_SUPPORT'
      },
      {
        label: '增值税数据回写',
        value: 'VatDataSaveDb'
      },
      {
        label: '进项转出汇总VAT_STD_ITS',
        value: 'VAT_STD_ITS'
      },
      {
        label: '销项收入汇总_营业外收入及其他收益(EBS_BUSRATE)',
        value: 'EBS_BUSRATE'
      },
      {
        label: '进项再保专票数据清洗',
        value: 'PFCleanReinsurance'
      },
      {
        label: '销项保费-保单质押贷款-其它业务涉税台账',
        value: 'PFVatOAllDataClean'
      },
      {
        label: '发票汇总脚本',
        value: 'PFVatOInvoice'
      },
      {
        label: 'attachedList5',
        value: 'attachedList5'
      },
      {
        label: '公司纳税主体子节点信息列表（apportion）',
        value: 'apportion'
      },
      {
        label: 'jzjtbnlj',
        value: 'jzjtbnlj'
      }
    ],
    taskType: [
      {
        label: '主办任务',
        value: 'Major'
      },
      {
        label: '协办任务',
        value: 'Aidant'
      }
    ],
    formType: [
      {
        label: '页面',
        value: 'page'
      },
      {
        label: '报表文件',
        value: 'ssjson'
      }
    ],
    visible: [
      {
        label: '是',
        value: '1'
      },
      {
        label: '否',
        value: '0'
      }
    ],
    performType: [
      {
        label: '普通参与',
        value: 'ANY'
      },
      {
        label: '会签参与',
        value: 'ALL'
      }
    ],
    disable: [
      {
        label: '是',
        value: 'true'
      },
      {
        label: '否',
        value: 'false'
      }
    ]
  }
}
