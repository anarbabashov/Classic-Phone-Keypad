import React, {useEffect, useState} from "react"
// import { Link } from "gatsby"

import {calcInputDisplay} from "../helper"

import Layout from "../components/layout"
import SEO from "../components/seo"

var mockData = {
  1: {
    value: 1,
    added: ['.', ',', '!']
  },
  2: {
    value: 2,
    added: ['a', 'b', 'c']
  },
  3: {
    value: 3,
    added: ['d', 'e', 'f']
  },
  4: {
    value: 4,
    added: ['g', 'h', 'i']
  },
  5: {
    value: 5,
    added: ['j', 'k', 'l']
  },
  6: {
    value: 6,
    added: ['m', 'n', 'o']
  },
  7: {
    value: 7,
    added: ['p', 'q', 'r', 's']
  },
  8: {
    value: 8,
    added: ['t', 'u', 'v']
  },
  9: {
    value: 9,
    added: ['w', 'x', 'y', 'z']
  },
  0: {
    value: 0,
    added: []
  },
  '#': {
    value: '#',
    added: []
  },
  '*': {
    value: '*',
    added: []
  }
}

const apiGetMockData =  () => {
  return new Promise((resolve, reject) =>  {
      setTimeout(resolve(mockData), 3000)
  })
}

const IndexPage = () => {
  const [data, setData] = useState({})
  const inputDisplay = calcInputDisplay()

  const getMockData = async () => {
    const response = await apiGetMockData()
    setData(response)
  }

  useEffect(() => {
      getMockData()
  }, [])

  const click = (e) => {
      var buttonId = e.target.getAttribute('data-value');
      var currentData = data[buttonId];
      var inputValue = document.querySelector('#result').value;

      if (buttonId && currentData) {
          document.querySelector('#result').value = inputDisplay({buttonId, currentData, inputValue})
      }
  }

  const clearInput = (e) => {
      var inputResult = document.querySelector('#result');
      var inputResultValue = inputResult.value
      inputResult.value = inputResultValue.slice('', inputResultValue.length - 1);
  }

  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <table id="phone">
    <thead>
    <tr>
        <td colSpan="3">
            <input type="text" id="result" />
        </td>
    </tr>
    </thead>
    <tbody onClick={click}>
    <tr>
        <td>
            <button data-value="1" className="key">1
                <span>. , !</span>
            </button>
        </td>
        <td>
            <button data-value="2" className="key">2
                <span>a b c</span>
            </button>
        </td>
        <td>
            <button data-value="3" className="key">3
                <span>d e f</span>
            </button>
        </td>
    </tr>
    <tr>
        <td>
            <button data-value="4" className="key">4
                <span>g h i</span>
            </button>
        </td>
        <td>
            <button data-value="5" className="key">5
                <span>j k l</span>
            </button>
        </td>
        <td>
            <button data-value="6" className="key">6
                <span>m n o</span>
            </button>
        </td>
    </tr>
    <tr>
        <td><button data-value="7" className="key">7
            <span>p q r s</span>
            </button>
        </td>
        <td>
            <button data-value="8" className="key">8
                <span>t u v</span>
            </button>
        </td>
        <td>
            <button data-value="9" className="key">9
                <span>w x y z</span>
            </button>
        </td>
    </tr>
    <tr>
        <td><button data-value="*" className="key">*</button></td>
        <td><button data-value="0" className="key">0</button></td>
        <td><button data-value="#" className="key">#</button></td>
    </tr>
    </tbody>
    <tfoot>
        <tr>
            <td><button className="key" onClick={clearInput}> clear </button></td>
        </tr>
    </tfoot>
</table>
  </Layout>
)}

export default IndexPage
